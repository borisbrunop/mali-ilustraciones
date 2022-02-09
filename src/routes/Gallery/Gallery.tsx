import GalleryGrid from './GalleryComponent'
import { CircularProgress, Box } from '@mui/material'
import { GalleryPhotos } from '../../bussiness/interfaces';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import SocialMedia from '../../components/SocialMedia';
import useGlobalMediaQuery from '../../hook/useGlobalMediaQuery';
import useMainContext from '../../hook/useMainContext';

export default function Gallery() {
    const c = useMainContext();
    const {states} = c
    const styles = { display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', height: '450px' }
    const theme = useTheme();
    const {sm, md, lg} = useGlobalMediaQuery();

    return states.loadingGalleryPhotos ? (
        <Box sx={styles}>
            <CircularProgress style={{color: theme.palette.main.text1}} />
        </Box>
    ) : (
        <>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Box sx={{width: lg ? '50%' : md ? '70%' : '100%'}}>
                    {states.loadingGalleryComponent ? (
                    <Box sx={styles}>
                        <CircularProgress style={{color: theme.palette.main.text1}} />
                    </Box>
                    ):(
                    <>
                    <Typography 
                        style={{
                            color: theme.palette.main.text1, 
                            display: 'flex', 
                            justifyContent: sm ? 'center' : 'end', 
                            padding: sm ? '10px 0px 0px 0px' : '50px 10px 0px 0px'
                        }} 
                        variant="h2"
                        >{states.components.title}</Typography>
                    <Typography sx={{
                        color: theme.palette.main.text1, 
                        padding: '10px 10px 50px 10px',
                        display: 'flex',
                        justifyContent: 'end'
                        }}
                    >{states.components.description}</Typography>
                    </>
                    )}
                </Box>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'flex-end', padding: '20px 10px 10px 0px'}}>
                <SocialMedia fontSize='30px'/>
            </Box>
                <GalleryGrid urls={states.urls} />
            <Box sx={{height: '60px'}} />
        </>
    );
}