import React, {useState} from "react";
import Button from "./Button";
import style from './Table.module.css'

const SearchForm = ({ handleSearchChange, searchTerm, handleApplySearch, handleResetSearch}) => {
    return <div className={style.form}>
        <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={e => handleSearchChange(e)}
            className={`${style.searchMain} ${style.searchPrimaryStyle}`}
        />
        <Button onClick={() => handleApplySearch(searchTerm)}>Search Button</Button>
        <Button onClick={handleResetSearch}>Reset All page Button</Button>
    </div>
};

const Table = ({ data= [
    {column1: '1', column2: 'data1', column3: 'data1'},
    {column1: '2', column2: 'data2', column3: 'data2'},
    {column1: '3', column2: 'data3', column3: 'data3'}
]}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [applySearch, setApplySearch] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleResetSearch = () => {
        setSearchTerm('');
        setApplySearch('');
    };
    const handleApplySearch = (data) => {
        setApplySearch(data);
    }

    let filteredData = [];
    if (Array.isArray(data)) {
        filteredData = data.filter((row) =>
            row.column2.toLowerCase().includes(applySearch.toLowerCase())
        );
    }

    return <div className={style.container}>
        <SearchForm searchTerm={searchTerm}
                    handleSearchChange={handleSearchChange}
                    handleResetSearch={handleResetSearch}
                    handleApplySearch={handleApplySearch}/>
        <table className={style.table}>
            <thead>
            <tr className={style.table}>
                <th>number</th>
                <th>fileName</th>
                <th>download</th>
            </tr>
            </thead>
            <tbody>
            {filteredData.map((row, i) => (
                <tr key={i}>
                    <td>{row.column1}</td>
                    <td className={style.titleLink}><a href={row.column2} download>{row.column2}</a></td>
                    <td className={style.downloadButton}><a href={row.column3} download>download</a></td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
};

export default Table;