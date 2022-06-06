export const analyticsTableColumns = [
    { field: 'id', headerName: 'ID', headerClassName: 'table--header', headerAlign: 'center', align: 'center', width: 100 },
    { field: 'name', headerName: 'Name', headerClassName: 'table--header', width: 300 },
    { field: 'numberOfModules', headerName: 'Number of Modules', headerClassName: 'table--header', headerAlign: 'center', align: 'center', type: 'number', width: 300 },
    { field: 'testTaken', headerName: 'Test Taken', headerClassName: 'table--header', headerAlign: 'center', align: 'center', type: 'number', width: 200 },
    {
      field: 'avgScore',
      headerName: 'Avg Score',
      headerClassName: 'table--header',
      headerAlign: 'center',
      align: 'center',
      type: 'number',
      width: 210,
    },
    {
      field: 'channel',
      headerName: 'Channel',
      headerClassName: 'table--header',
      headerAlign: 'center',
      align: 'center',
      
      
      width: 245,
    },
  ];
  
 export const analyticsTableRows = [
    { id: 1, name: 'Marcus', numberOfModules: 5, testTaken: 3, avgScore: 87, channel: 'Whatsapp' },
    { id: 2, name: 'Daniel', numberOfModules: 3, testTaken: 1, avgScore: 65, channel: 'Message' },
    { id: 3, name: 'Paul', numberOfModules: 2, testTaken: 1, avgScore: 70, channel: 'Whatsapp' },
    { id: 4, name: 'David', numberOfModules: 6, testTaken: 4, avgScore: 76, channel: 'Message' },
    { id: 5, name: 'Ralf', numberOfModules: 2, testTaken: 0, avgScore: 0, channel: 'Whatsapp' },
    { id: 6, name: 'Elanga', numberOfModules: 1, testTaken: 1, avgScore: 95, channel: 'Message' },
    ];