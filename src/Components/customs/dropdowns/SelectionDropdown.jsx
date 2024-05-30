import React, { useState, useEffect, useRef } from "react";
import { getRequest } from "../../../services";
import styles from "./dropdown.module.css";

const SelectionDropdown = ({ apiEndpoint, getParent }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
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
  };

  const handleSelect = (item) => {
    setSearch(item.Username);
    setShowDropdown(false);
    getParent(item.parent_id);
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
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <input
        type="text"
        className={`${styles.formControl} form-control`}
        value={search}
        onChange={handleSearch}
        onFocus={() => setShowDropdown(true)}
        placeholder="Search..."
      />
      {loading && <div className={styles.spinner}>Loading...</div>}
      {error && <div className={styles.error}>{error}</div>}
      {!loading && !error && showDropdown && (
        <ul className={styles.dropdownMenu}>
          {filteredData?.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSelect(item)}
              className={styles.dropdownItem}
            >
              {item.Username}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectionDropdown;
