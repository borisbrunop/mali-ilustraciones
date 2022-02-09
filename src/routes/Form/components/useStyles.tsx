import { makeStyles } from '@material-ui/styles';

export const SelectStyles = makeStyles(theme => ({
    mySelector: (props: any) => ({
        "& .MuiSelect-root": {
            backgroundColor: "red",
            "& option": {
            padding: "10px 4px",
            //backgroundColor: "rgba(0, 0, 0, 0.08) !important", This had strange DOM effects
            "&::before": {
                content: '"\\2610"',
                width: "1.4em",
                textAlign: "center",
                display: "inline-block",
                fontSize: 24
            }
            },
            "& option:checked": {
            "&::before": {
                content: '"\\2611"',
                fontSize: 24
            }
            }
        }
    }),
}));