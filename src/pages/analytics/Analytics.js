import analyticsSelectItems from './AnalyticsSelectItems';
import analyticsCardItems from './AnalyticsCardItems';
import { analyticsTableColumns, analyticsTableRows} from './AnalyticsTableData';
import LearnersTable from '../../Components/LearnersTable/LearnersTable';
import './analytics.css';

const Analytics = () => {
    
  return (
        
    <div className='analyticsPageContainer'>
      <span className='analyticsPageHeading'>Analytics</span>

      <div className='analyticsSelectInputsContainer'>
        {analyticsSelectItems.map((items, i) => {
          return (
            <div className='analyticsSelectInputContainer' key={i}>
              <span className='analyticsSelectInputTitle'>{analyticsSelectItems[i].title}</span>
              {analyticsSelectItems[i].input}
            </div>
          )
        })}

      </div>

      <div className='greyBackground'>
        <div className='analyticsCards'>
          {analyticsCardItems.map((items, i) => {
            return (
              <div className='analyticsCard' key={i}>
                <div className='analyticsCardTitleContainer'>
                  <p className='analyticsCardTitle'>{analyticsCardItems[i].title}</p>
                  <div>{analyticsCardItems[i].icon}</div>
                </div>
                <div className='analyticsCardStudentsContainer'>
                  <p className='analyticsCardFraction'>{analyticsCardItems[i].fraction}</p>
                  <p className='analyticsCardRate'>{analyticsCardItems[i].rate}</p>
                  <div>{analyticsCardItems[i].arrowIcon}</div>
                </div>
                <p className='analyticsCardSubtitle'>vs. previous month</p>
              </div>
            )
          })
          }
        </div>
        <LearnersTable rows={analyticsTableRows} columns={analyticsTableColumns} />
      </div>
    </div>
        
    )
}

export default Analytics;