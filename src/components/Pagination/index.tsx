'use client';

import React, { useEffect, useState } from 'react';
import { InputNumber, Select, Pagination } from 'antd';
import type { PaginationProps } from 'antd';

interface Props {
  pagination: {
    pageIndex: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
  };
  onPageChange: (pageIndex: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

const PaginationComponent: React.FC<Props> = ({
  pagination,
  onPageChange,
  onPageSizeChange,
}) => {
  const [valueCurrent, setValueCurrent] = useState<number>(pagination.pageIndex);

  useEffect(() => {
    setValueCurrent(pagination.pageIndex);
  }, [pagination.pageIndex]);

  const pageSizes = [
    { value: 20, label: '20' },
    { value: 50, label: '50' },
    { value: 100, label: '100' },
  ];

  const renderRange = () => {
    const { pageIndex, pageSize, totalElements, totalPages } = pagination;

    if (totalElements === 0) return `0 / 0 hàng`;

    const start = (pageIndex - 1) * pageSize + 1;
    const end =
      pageIndex === totalPages
        ? totalElements
        : Math.min(pageIndex * pageSize, totalElements);

    return `${start}-${end} / ${totalElements} hàng`;
  };

  return (
    <div className="pagination-container flex flex-col md:flex-row justify-between items-center gap-4 py-2 px-4 border-t bg-gray-100">
      <div className="flex items-center gap-4">
        <div className="text-sm">
          Đi đến trang:{' '}
          <InputNumber
            min={1}
            max={pagination.totalPages}
            value={valueCurrent}
            onChange={(val) => setValueCurrent(val ?? 1)}
            onPressEnter={() => onPageChange(valueCurrent)}
            className="w-16 text-center"
          />
        </div>

        <div className="text-sm flex items-center gap-2">
          Hiển thị số hàng:{' '}
          <Select
            value={pagination.pageSize}
            options={pageSizes}
            className="w-20"
            onChange={(value) => onPageSizeChange(value)}
          />
          <span className="ml-2">{renderRange()}</span>
        </div>
      </div>

      <Pagination
        className="max-w-full overflow-x-auto md:overflow-visible"
        current={pagination.pageIndex}
        pageSize={pagination.pageSize}
        total={pagination.totalElements}
        size='small'
        showSizeChanger={false}
        onChange={(page) => onPageChange(page)}
      />
    </div>
  );
};

export default PaginationComponent;
