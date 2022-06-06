import { ReactComponent as LearnersIcon} from './Learners.svg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ReactComponent as ProgressIcon} from './Progress.svg';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import { grey } from '@mui/material/colors';
import { ReactComponent as ArrowUpward } from './Arrow-upward.svg';
import { ReactComponent as ArrowDownward } from './Arrow-downward.svg';



const analyticsCardItems = [
    {
        title: 'Learners',
        icon: <LearnersIcon />,
        fraction: '500',
        rate: '12%',
        arrowIcon: <ArrowUpward />
    },

    {
        title: 'Completed',
        icon: <CheckCircleIcon sx={{ fontSize: 50, color: grey[500] }} />,
        fraction: '75/500',
        rate: '22%',
        arrowIcon: <ArrowUpward />
    },

    {
        title: 'In Progress',
        icon: <ProgressIcon />,
        fraction: '375/500',
        rate: '12%',
        arrowIcon: <ArrowUpward />
    },

    {
        title: 'Not Started',
        icon: <StopCircleOutlinedIcon sx={{ fontSize: 50, color: grey[500] }}/>,
        fraction: '50/500',
        rate: '8%',
        arrowIcon: <ArrowDownward />
    }
];

export default analyticsCardItems;