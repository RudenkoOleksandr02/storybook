import React, { useEffect, useState } from 'react';
import axios from "axios";
import Table from "./Table";
import Button from "./Button";

const TableWithButton = () => {
    const [isTableVisible, setIsTableVisible] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [fileData, setFileData] = useState(null);

    useEffect(() => {
        if (isTableVisible && fileData) {
            const data = fileData.map((data) => {
                return { column1: data.id, column2: data.title, column3: data.title };
            });
            setTableData(data);
        } else {
            setTableData([]);
        }
    }, [isTableVisible, fileData]);

    const handleButtonClick = () => {
        setIsTableVisible(!isTableVisible);
    };

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setFileData(response.data));
    }, []);

    return (
        <div>
            <Button onClick={handleButtonClick}>
                {!isTableVisible ? 'Show Table' : 'Hide Table'}
            </Button>
            {isTableVisible && tableData && <Table data={tableData} />}
        </div>
    );
};

export default TableWithButton;