import { styled, Tab, Tabs } from "@mui/material";

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange?: (event: React.SyntheticEvent, newValue: number) => void;
}

export const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  height: '20px',
  minHeight: '20px !important',
  '& .MuiTabs-scroller': {
    height: '20px'
  },
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: '4px',
    marginTop: '2px'
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#FF5D55',
  },
});

interface StyledTabProps {
  label: string;
}

export const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  fontWeight: '700',
  fontSize: '12px',
  fontFamily: 'inherit',
  height: '20px',
  '&.MuiTabs-flexContainer': {
    height: '20px',
  },
  '&.MuiButtonBase-root': {
    height: '20px',
    minHeight: '20px',
    minWidth: 'unset',
    padding: '0',
  },
  '&.Mui-selected': {
    color: '#FF5D55',
  },
  '&.Mui-focusVisible': {
    border: '1px solid #FF5D55',
    borderRadius: '4px'
  },
}));