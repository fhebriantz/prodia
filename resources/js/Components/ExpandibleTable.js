import { Table } from 'antd';
const mainDataSource = [
  {
    key: '1',
    name: 'Parent 1',
    value: 1,
    children: [
        { 
            key: '11', 
            nama: 'Child 11',
            nilai: 11,
            subchildren: [
                { key: '111', ngaran: 'Child 111', buah:111 },
                { key: '112', ngaran: 'Child 112', buah:112  }
            ]
        },
        { 
            key: '12', 
            nama: 'Child 12',
            nilai: 12,
            subchildren: [
                { key: '121', ngaran: 'Child 121', buah:121 },
                { key: '122', ngaran: 'Child 122', buah:122 }
            ]
        },
    ]
  },
  {
    key: '2',
    name: 'Parent 2',
    value: 2,
    children: [
        { 
            key: '21', 
            nama: 'Child 21',
            nilai: 21,
            subchildren: [
                { key: '211', ngaran: 'Child 211', buah:211  },
                { key: '212', ngaran: 'Child 212', buah:212 }
            ]
        },
        { 
            key: '22', 
            nama: 'Child 22',
            nilai: 22,
            subchildren: [
                { key: '221', ngaran: 'Child 221', buah:221 },
                { key: '222', ngaran: 'Child 222', buah:222 }
            ]
        },
    ]
  },
];

const mainColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value'
  }
];

const nestedColumns = [
  {
    title: 'Child nama',
    dataIndex: 'nama',
    key: 'nama'
  },
  {
    title: 'Child nilai',
    dataIndex: 'nilai',
    key: 'nilai'
  }
];
const subnestedColumns = [
  {
    title: 'Child ngaran',
    dataIndex: 'ngaran',
    key: 'ngaran'
  },
  {
    title: 'Child buah',
    dataIndex: 'buah',
    key: 'buah'
  }
];

const ExpandibleTable = ({
  name="",
  height=""
}) => {
    
    return (
        <Table
  dataSource={mainDataSource}
  columns={mainColumns}
  pagination={false}
  expandable={{
    expandedRowRender: record => (
      <Table
        dataSource={record.children}
        columns={nestedColumns}
        pagination={false}
        expandable={{
            expandedRowRender: record => (
            <Table
                dataSource={record.subchildren}
                columns={subnestedColumns}
                pagination={false}
            />
            ),
            rowExpandable: record => record.subchildren && record.subchildren.length > 0
        }}
      />
    ),
    rowExpandable: record => record.children && record.children.length > 0
  }}
/>
    );
};

export default ExpandibleTable;