import React, { useState, useEffect, useRef } from "react";
import { getRequest } from "../../../services";
import styles from "./dropdown.module.css";

import toast, { Toaster } from "react-hot-toast";

const MultiSelectionDropdown = ({ apiEndpoint, getChild }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1); // Track focused item index
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getRequest(apiEndpoint);
        const data = await response.json();
        setData(data);
        setFilteredData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    const filtered = data?.filter((item) =>
      item.Username.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
    setShowDropdown(true);
    setFocusedIndex(-1); // Reset focused item index when searching
  };

  const handleSelect = (item) => {
    const index = selectedItems.indexOf(item);
    if (index === -1) {
      setSelectedItems((prev) => [...prev, item]);
    } else {
      toast.error("This item is already added");
    }
    setSearch("");
    getChild(item);
    setShowDropdown(false);
    setFilteredData(data);
    setFocusedIndex(-1);
  };

  const handleRemove = (item) => {
    setSelectedItems(
      selectedItems.filter(
        (selected) => selected.student_id !== item.student_id
      )
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" && focusedIndex < filteredData.length - 1) {
      e.preventDefault();
      setFocusedIndex((prevIndex) => prevIndex + 1);
    } else if (e.key === "ArrowUp" && focusedIndex > 0) {
      e.preventDefault();
      setFocusedIndex((prevIndex) => prevIndex - 1);
    } else if (e.key === "Enter" && focusedIndex !== -1) {
      handleSelect(filteredData[focusedIndex]);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Toaster />
      <div className={styles.dropdownContainer} ref={dropdownRef}>
        <div className={styles.inputContainer}>
          {selectedItems.map((item) => (
            <span key={item.id} className={styles.sectionChip}>
              {item.Username}
              <button
                type="button"
                onClick={() => handleRemove(item)}
                className={styles.chipClose}
              >
                &times;
              </button>
            </span>
          ))}
          <input
            type="text"
            className={`${styles.formControl} form-control`}
            value={search}
            onChange={handleSearch}
            onFocus={() => setShowDropdown(true)}
            onKeyDown={handleKeyDown} // Add keydown event listener
            placeholder="Search..."
          />
        </div>
        {loading && <div className={styles.spinner}>Loading...</div>}
        {error && <div className={styles.error}>{error}</div>}
        {!loading && !error && showDropdown && (
          <ul className={styles.dropdownMenu}>
            {filteredData?.map((item, index) => (
              <li
                key={item.id}
                onClick={() => handleSelect(item)}
                className={`${styles.dropdownItem} ${
                  index === focusedIndex ? styles.focused : ""
                }`}
              >
                {item.Username}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default MultiSelectionDropdown;
