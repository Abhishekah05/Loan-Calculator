import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Search, RefreshCw, ChevronUp, ChevronDown } from 'lucide-react';

export default function ExchangeRatesTable() {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [baseRate, setBaseRate] = useState('USD');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'currency', direction: 'ascending' });
  
  const itemsPerPage = 10;
  const apiKey = '608d10bb5ee0dbe93dafd102';
  const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseRate}`;

  // Material UI inspired styles
  const styles = {
    container: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      maxWidth: "900px",
      margin: "0 auto",
      marginTop: "20px",
      padding: "24px",
      boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
      borderRadius: "8px",
      backgroundColor: "#ffffff"
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "24px",
     
      paddingTop: "16px"
    },
    title: {
      fontSize: "24px",
      fontWeight: "500",
      color: "#1976d2",
      margin: "0"
    },
    controlsContainer: {
      display: "flex",
      alignItems: "center",
      gap: "16px"
    },
    searchContainer: {
      position: "relative",
      marginBottom: "20px",
      width: "100%"
    },
    searchIcon: {
      position: "absolute",
      left: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#757575"
    },
    searchInput: {
      width: "100%",
      padding: "10px 10px 10px 36px",
      fontSize: "14px",
      border: "1px solid #e0e0e0",
      borderRadius: "4px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
    },
    tableContainer: {
      overflowX: "auto",
      borderRadius: "4px",
      border: "1px solid #e0e0e0",
      marginBottom: "20px"
    },
    table: {
      width: "100%",
      borderCollapse: "collapse"
    },
    tableHeader: {
      backgroundColor: "#f5f5f5",
      color: "#424242",
      fontSize: "13px",
      textTransform: "uppercase",
      padding: "16px",
      textAlign: "left",
      cursor: "pointer",
      userSelect: "none",
      borderBottom: "2px solid #e0e0e0"
    },
    tableCell: {
      padding: "16px",
      borderBottom: "1px solid #e0e0e0",
      fontSize: "14px"
    },
    selectContainer: {
      display: "flex",
      alignItems: "center"
    },
    label: {
      marginRight: "8px",
      fontSize: "14px",
      color: "#616161"
    },
    select: {
      padding: "8px 12px",
      borderRadius: "4px",
      border: "1px solid #e0e0e0",
      fontSize: "14px",
      backgroundColor: "#fff",
      minWidth: "100px"
    },
    button: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      backgroundColor: "#1976d2",
      color: "white",
      border: "none",
      borderRadius: "4px",
      padding: "8px 16px",
      fontSize: "14px",
      cursor: "pointer",
      transition: "background-color 0.3s",
      fontWeight: "500"
    },
    paginationContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    paginationInfo: {
      fontSize: "14px",
      color: "#616161"
    },
    paginationControls: {
      display: "flex",
      alignItems: "center",
      gap: "8px"
    },
    paginationButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center", 
      padding: "4px 8px",
      border: "1px solid #e0e0e0",
      borderRadius: "4px",
      backgroundColor: "#fff",
      cursor: "pointer"
    },
    paginationPage: {
      padding: "4px 12px",
      border: "1px solid #e0e0e0",
      borderRadius: "4px",
      fontSize: "14px"
    },
    loadingContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "300px"
    },
    spinner: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      border: "3px solid #f3f3f3",
      borderTop: "3px solid #1976d2",
      animation: "spin 1s linear infinite"
    },
    errorContainer: {
      padding: "16px",
      backgroundColor: "#ffebee",
      border: "1px solid #ffcdd2",
      borderRadius: "4px",
      color: "#c62828"
    },
    sortIcon: {
      marginLeft: "4px",
      fontSize: "14px"
    },
    headerCell: {
      display: "flex",
      alignItems: "center"
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rates');
      }
      const data = await response.json();
      if (data.result === 'success') {
        setRates(data.conversion_rates);
        setError(null);
      } else {
        setError(`API Error: ${data.error_type}`);
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleRefresh = () => {
    fetchRates();
  };

  const handleBaseRateChange = (e) => {
    setBaseRate(e.target.value);
  };

  // Format currencies as a list of objects
  const currenciesList = Object.keys(rates).map(currency => ({
    currency,
    rate: rates[currency],
    code: currency
  }));

  // Filter based on search
  const filteredCurrencies = currenciesList.filter(item => 
    item.currency.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort the filtered currencies
  const sortedCurrencies = [...filteredCurrencies].sort((a, b) => {
    if (sortConfig.key === 'currency') {
      if (sortConfig.direction === 'ascending') {
        return a.currency.localeCompare(b.currency);
      }
      return b.currency.localeCompare(a.currency);
    } else {
      if (sortConfig.direction === 'ascending') {
        return a.rate - b.rate;
      }
      return b.rate - a.rate;
    }
  });

  // Calculate pagination
  const totalPages = Math.ceil(sortedCurrencies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCurrencies = sortedCurrencies.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div style={styles.container}>
      {/* Header with title and controls on same line */}
      <div style={styles.header}>
        <h1 style={styles.title}>Live Exchange Rates</h1>
        
        <div style={styles.controlsContainer}>
          <div style={styles.selectContainer}>
            <label htmlFor="baseRate" style={styles.label}>Base Currency:</label>
            <select 
              id="baseRate"
              value={baseRate}
              onChange={handleBaseRateChange}
              style={styles.select}
            >
              {Object.keys(rates).length > 0 && 
                Object.keys(rates).map(currency => (
                  <option key={currency} value={currency}>{currency}</option>
                ))
              }
              {Object.keys(rates).length === 0 && <option value="USD">USD</option>}
            </select>
          </div>
          
          <button 
            onClick={handleRefresh} 
            style={styles.button}
          >
            <RefreshCw size={16} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Search bar */}
      <div style={styles.searchContainer}>
        <div style={styles.searchIcon}>
          <Search size={16} />
        </div>
        <input
          type="text"
          placeholder="Search currencies..."
          value={searchTerm}
          onChange={handleSearch}
          style={styles.searchInput}
        />
      </div>

      {/* Content - Loading, Error or Table */}
      {loading ? (
        <div style={styles.loadingContainer}>
          <div style={{...styles.spinner, animation: "spin 1s linear infinite"}}></div>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      ) : error ? (
        <div style={styles.errorContainer}>
          {error}
        </div>
      ) : (
        <>
          {/* Table */}
          <div style={styles.tableContainer}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th 
                    style={styles.tableHeader}
                    onClick={() => handleSort('currency')}
                  >
                    <div style={styles.headerCell}>
                      <span>Currency</span>
                      {sortConfig.key === 'currency' && (
                        <span style={styles.sortIcon}>
                          {sortConfig.direction === 'ascending' ? '▲' : '▼'}
                        </span>
                      )}
                    </div>
                  </th>
                  <th 
                    style={styles.tableHeader}
                    onClick={() => handleSort('rate')}
                  >
                    <div style={styles.headerCell}>
                      <span>Rate (1 {baseRate} =)</span>
                      {sortConfig.key === 'rate' && (
                        <span style={styles.sortIcon}>
                          {sortConfig.direction === 'ascending' ? '▲' : '▼'}
                        </span>
                      )}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedCurrencies.map((item, index) => (
                  <tr key={index} style={{backgroundColor: index % 2 === 0 ? '#ffffff' : '#f5f5f5'}}>
                    <td style={styles.tableCell}>
                      {item.currency}
                    </td>
                    <td style={styles.tableCell}>
                      {item.rate.toFixed(6)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination controls */}
          <div style={styles.paginationContainer}>
            <div style={styles.paginationInfo}>
              Showing <strong>{startIndex + 1}</strong> to <strong>
                {Math.min(startIndex + itemsPerPage, sortedCurrencies.length)}
              </strong> of <strong>{sortedCurrencies.length}</strong> currencies
            </div>
            <div style={styles.paginationControls}>
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                style={{...styles.paginationButton, opacity: currentPage === 1 ? 0.5 : 1}}
              >
                <ArrowLeft size={16} />
              </button>
              <span style={styles.paginationPage}>
                {currentPage} / {totalPages || 1}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages || totalPages === 0}
                style={{...styles.paginationButton, opacity: currentPage === totalPages || totalPages === 0 ? 0.5 : 1}}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}