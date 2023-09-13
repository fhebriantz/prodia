import React from 'react';
import { Table } from 'antd';



const TableWithoutHeader = ({
  name="",
  height=""
}) => {
    const dataSource = [
    { key: '1', title: 'Kode Lokasi', value: ': '+name },
    { key: '2', title: 'Provinsi', value: ': '+'Bali' },
    { key: '3', title: 'Kabupaten/Kota', value: ': '+'Badung' },
    { key: '4', title: 'Kecamatan', value: ': '+'Kuta Selatan' },
    { key: '5', title: 'Desa/Kerlurahan', value: ': '+'Kutuh' },
    { key: '6', title: 'Tahun Perolehan', value: ': '+'2023' },
    { key: '7', title: 'Potensi Luas', value: ': '+'3.40 Ha' },
    { key: '8', title: 'Realisasi Luas', value: ': '+'Dalam Proses' },
    { key: '9', title: 'Nomor SK', value: ': '+'Dalam Proses' },
    { key: '10', title: 'Pemegang Hak Sebelumnya', value: ': '+'PT Citra Lamtoro' },
    { key: '11', title: 'Dasar Perolehan', value: ': '+'Tanah Terindikasi Terlantar' },
    { key: '12', title: 'P.I.C. Perolehan', value: ': '+'Mahendra Wahyu Utomo' }
    ];


    const columns = [
        { 
            title: 'Title', 
            dataIndex: 'title', 
            key: 'title',
            render: (text) => <p style={{ fontSize: 11 }}>{text}</p>
        },
        { 
            title: 'Value', 
            dataIndex: 'value', 
            key: 'value',
            render: (text) => <p style={{ fontSize: 11 }}>{text}</p>
        }
    ];
  return (
    <>
      <div style={{width:'100%', textAlign:"center", background:'#FAFAFA', padding:8, borderTopLeftRadius:8, borderTopRightRadius:8}}><span style={{ fontSize: 12, fontWeight:600 }}>DATA PEROLEHAN</span></div>
      <Table
        dataSource={dataSource}
        columns={columns}
        size={'small'}
        showHeader={false}
        pagination={false} // remove pagination if not needed
        scroll={{ y: height }}
      />
    </>
  );
};

export default TableWithoutHeader;