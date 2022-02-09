import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
    mySelector: (props: any) => ({
        rootMenuItem: {
            "&$selected": {
                color: props.palette.main.text1,
                marginBottom: '0px',
                fontSize: '34px'
            },
        },
        color: '#937765',
        marginBottom: '5px'
    }),
}));