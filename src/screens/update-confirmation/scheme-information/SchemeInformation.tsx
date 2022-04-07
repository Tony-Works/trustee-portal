import Card from 'components/card';
import { ReactElement } from 'react';
import { styled, Box, Typography, Paper, Avatar } from '@mui/material';
import arrow from 'assets/img/arrow.png';

const Divider = styled(Box)({
  width: '100%',
  height: '0.0625rem',
  marginTop: '2rem',
  marginBottom: '2rem',
  backgroundColor: '#676766',
});

const Container = styled(Box)({
  padding: '1rem',
  border: '1px solid #ececec',
  borderRadius: '100%',
  justifySelf: 'center',
});

const CustomArrow = styled(Avatar)({
  margin: '0 auto',
  height: '4rem',
  width: '4rem',
  position: 'relative',
  paddingTop: '1rem',
});

const SectionContainer = styled(Box)({
  display: 'flex',
  gap: '2rem',
  color: 'gray',
});

const DefinitionContain = styled(Box)({
  gridColumn: '2 / 2',
  display: 'flex',
  alignItems: 'center',
  gap: '10rem',
});

const Definition = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  gap: '.5rem',
  textAlign: 'left',
});

const PaperSection = styled(Box)({
  display: 'inline-block',
  textAlign: 'right',
  width: '50%',
});

const ListTypography = styled(Typography)(({ theme }) => ({
  ...theme.typography.h5,
  fontWeight: theme.typography.fontWeightMedium,
  paddingTop: '4rem',
}));

const SchemeInformation = (): ReactElement => {
  return (
    <Card title="Section 2 - Scheme Information">
      <SectionContainer>
        <ListTypography color="primary" variant="h5">
          2
        </ListTypography>
        <PaperSection>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" fontWeight="medium">
              MPF Scheme A
            </Typography>
            <Typography variant="h6" color="primary" fontWeight="medium">
              Original
            </Typography>
          </Box>
          <Paper elevation={5} variant="outlined">
            <DefinitionContain>
              <Definition>
                <Typography variant="body2">Fund English Name</Typography>
                <Typography variant="h6">Fund Name 01</Typography>
              </Definition>
            </DefinitionContain>
          </Paper>
        </PaperSection>
        <Container>
          <CustomArrow src={arrow} />
        </Container>
        <PaperSection>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" fontWeight="medium">
              MPF Scheme A
            </Typography>
            <Typography variant="h6" color="primary" fontWeight="medium">
              New
            </Typography>
          </Box>
          <Paper elevation={5} variant="outlined">
            <DefinitionContain>
              <Definition>
                <Typography variant="body2">Fund English Name</Typography>
                <Typography variant="h6">New Fund Name 01</Typography>
              </Definition>
            </DefinitionContain>
          </Paper>
        </PaperSection>
      </SectionContainer>
      <Divider />
      <SectionContainer>
        <ListTypography color="primary" variant="h5">
          3
        </ListTypography>
        <PaperSection>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" fontWeight="medium">
              MPF Scheme A
            </Typography>
            <Typography variant="h6" color="primary" fontWeight="medium">
              New
            </Typography>
          </Box>
          <Paper elevation={5} variant="outlined">
            <DefinitionContain>
              <Definition>
                <Typography variant="body2">Fund English Name</Typography>
                <Typography variant="h6">Fund Name 08</Typography>
              </Definition>
            </DefinitionContain>
          </Paper>
        </PaperSection>
        <Container>
          <CustomArrow src={arrow} />
        </Container>
        <PaperSection>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" fontWeight="medium">
              MPF Scheme A
            </Typography>
            <Typography variant="h6" color="primary" fontWeight="medium">
              New
            </Typography>
          </Box>
          <Paper elevation={5} variant="outlined">
            <DefinitionContain>
              <Definition>
                <Typography variant="body2">Fund English Name</Typography>
                <Typography variant="h6">New Fund Name 08</Typography>
              </Definition>
            </DefinitionContain>
          </Paper>
        </PaperSection>
      </SectionContainer>
    </Card>
  );
};

export default SchemeInformation;
