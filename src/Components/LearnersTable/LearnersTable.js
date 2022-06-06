import './learnersTable.css';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';


function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
    </GridToolbarContainer>
  );
}

const LearnersTable = ({ rows, columns }) => {
    
      return (
        <div className='learnersTableContainer'>
            <div className='learnersTableTitle'>Learners</div>
                <div className='learnersTable'>
                
                <DataGrid
                    rows={rows}
                    columns={columns}
                    rowHeight={80}
                    components={{
                      Toolbar: CustomToolbar,
                      }}
                    autoPageSize
                    disableColumnMenu
                    disableSelectionOnClick
                />
                
              </div>
        </div>
          
      )
}

export default LearnersTable;