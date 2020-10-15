import React from 'react';

const BasicTable = ({ columns, data, classes }) => {
    return (
        <div className="container">
            <div>
            <table className={`${classes}`}>
                <thead>
                    <tr>
                        {
                            columns.map((column) => {
                                return (
                                    <th key={column}>{column}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((row, index) => {
                            return (
                                <tr key={index}>
                                    {
                                        Object.values(row).map((cellItem, index) => {
                                            return (
                                                <td key={index}>{cellItem}</td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        </div>

    );
}
export default BasicTable;