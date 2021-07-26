import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function usePagination(dataName, initPageSize) {
    const data = useSelector((state) => state[dataName].data);
    const [currentData, setCurrentData] = useState([]);
    const [paginationParam, setPaginationParam] = useState({
        page: 1,
        pageSize: initPageSize,
    });

    useEffect(() => {
        const { page, pageSize } = paginationParam;
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        setCurrentData(data?.slice(start, end));
        console.log('run');
    }, [paginationParam, data]);

    return {
        currentData,
        currentPage: paginationParam.page,
        totalPage: data.length,
        setPaginationParam,
        setCurrentData,
        pageSize: paginationParam.pageSize,
    };
}

export default usePagination;
