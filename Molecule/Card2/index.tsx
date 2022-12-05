import styled from "@emotion/styled/types/base"
import Card from "@mui/material/Card"
import { CardContent, Typography } from "@mui/material"
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
const Card2=() => {
    const StyleCard=styled("div")({
        display: "flex",
        flexDirection: "column",
        alignitems: "flex-start",
        padding: "16px 19px",
        gap: "10px",
        position: "absolute",
        width: "571px",
        height: "159px",
        left: "20px",
        top: "199px",
        background: "#FFFFFF",
        border: "2px solid #77EDDF",
        borderradius: "12px",
    })
    return(
        <Card>
            <StyleCard>
            <CardContent>
                <div>

                </div>
                <div>
                    <Typography>UserExperience Designer</Typography>
                    <Typography>Myntra</Typography>
                    <Typography>Hitech city,Hyderabad - 500072</Typography>
                </div>
                <div>
                    <DirectionsBusFilledIcon/>
                    <DirectionsCarIcon />
                    <DirectionsBusIcon />

                </div>
            </CardContent>
            </StyleCard>
        </Card>
    )
}
export default Card2;