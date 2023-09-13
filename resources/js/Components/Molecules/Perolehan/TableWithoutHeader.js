import React from 'react';
import { Table } from 'antd';



const TableWithoutHeader = ({
  name="",
  height="",
  source={}
}) => {
    const dataSource = [
    { key: '1', title: 'Kode Lokasi', value: ': '+source?.site_name },
    { key: '2', title: 'Provinsi', value: ': '+source?.provinsi_nama },
    { key: '3', title: 'Kabupaten/Kota', value: ': '+source?.kota_nama },
    { key: '4', title: 'Kecamatan', value: ': '+source?.kecamatan },
    { key: '5', title: 'Desa/Kerlurahan', value: ': '+source?.kelurahan },
    { key: '6', title: 'Tahun Perolehan', value: ': '+source?.rkat_tahun },
    { key: '7', title: 'Potensi Luas', value: ': '+source?.perolehan_luas },
    { key: '8', title: 'Realisasi Luas', value: ': '+(source?.perolehan_luas_realisasi == null? 'Dalam Proses':source?.perolehan_luas_realisasi) },
    { key: '9', title: 'Nomor SK', value: ': '+(source?.nomor_sk == null? 'Dalam Proses':source?.nomor_sk) },
    { key: '10', title: 'Pemegang Hak Sebelumnya', value: ': '+source?.bekas_pemegang_hak },
    { key: '11', title: 'Dasar Perolehan', value: ': '+source?.perolehan_dasar },
    { key: '12', title: 'P.I.C. Perolehan', value: ': '+source?.perolehan_pic }
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