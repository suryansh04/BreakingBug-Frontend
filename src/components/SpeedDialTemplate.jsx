import React from 'react';
import { SpeedDial, SpeedDialAction, styled } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';

const SpeedDialTemplate = ({ actions }) => {
    // Define the taskHandler function
    const taskHandler = (action) => {
        // Implement what happens when an action is clicked
        console.log(`Action ${action.name} clicked`);
    };

    return (
        <CustomSpeedDial
            ariaLabel="SpeedDial playground example"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<TuneIcon />}
            direction="left"
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={() => taskHandler(action)} // Use the taskHandler here
                />
            ))}
        </CustomSpeedDial>
    );
}

export default SpeedDialTemplate;

const CustomSpeedDial = styled(SpeedDial)`
  .MuiSpeedDial-fab {
    background-color: #032803;
    
    &:hover {
      background-color: green;
    }
  }
`;
