import SelectInputSmall from '../../pages/analytics/SelectInputSmall';
import { course, student, cohort, test } from '../../Components/SelectInputOptions';

const analyticsSelectItems = [
    {
        title: 'Course',
        input: <SelectInputSmall options={course} inputLabel='Select Course'/>
    },

    {
        title: 'Cohort',
        input: <SelectInputSmall options={cohort} inputLabel='Select Cohort'/>
    },

    {
        title: 'Student',
        input: <SelectInputSmall options={student} inputLabel='Select Student'/>
    },

    {
        title: 'Test',
        input: <SelectInputSmall options={test} inputLabel='Select Test'/>
    }
]

export default analyticsSelectItems;