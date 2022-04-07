import Card from 'components/card';
import { ReactElement } from 'react';
import { styled, Box, Typography, Button, Paper, Avatar } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
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

const DateBox = styled(Box)({
  gridColumn: '2 / 2',
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
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

const TrusteeInformation = (): ReactElement => {
  return (
    <Card title="Update Trustee & Scheme Information for Approve">
      <Box>
        <DefinitionContain>
          <Definition>
            <Typography variant="caption">Case Reference Number</Typography>
            <Typography variant="subtitle2" fontWeight="bold">
              3243546464734232
            </Typography>
          </Definition>
        </DefinitionContain>
        <DateBox>
          <Typography>Effective Date: 25/12/2021</Typography>
          <Button variant="outlined" startIcon={<DateRangeIcon />}>
            Change Effective Date
          </Button>
        </DateBox>
      </Box>
      <Card title="Section 1 - Trustee Information">
        <SectionContainer>
          <ListTypography color="primary" variant="h5">
            1
          </ListTypography>
          <PaperSection>
            <Typography variant="h6" color="primary" fontWeight="medium">
              Original
            </Typography>
            <Paper elevation={5} variant="outlined">
              <DefinitionContain>
                <Definition>
                  <Typography variant="body2">Principal Business Address</Typography>
                  <Typography variant="h6">
                    RM1101, 11/F, ABC Tower, Hong Kong.
                  </Typography>
                </Definition>
              </DefinitionContain>
            </Paper>
          </PaperSection>
          <Container>
            <CustomArrow src={arrow} />
          </Container>
          <PaperSection>
            <Typography variant="h6" color="primary" fontWeight="medium">
              New
            </Typography>
            <Paper elevation={5} variant="outlined">
              <DefinitionContain>
                <Definition>
                  <Typography variant="body2">Principal Business Address</Typography>
                  <Typography variant="h6">
                    RM1101, 11/F, ABC Tower, Hong Kong.
                  </Typography>
                </Definition>
              </DefinitionContain>
            </Paper>
          </PaperSection>
        </SectionContainer>
        <Divider />
        <SectionContainer>
          <ListTypography color="primary" variant="h5">
            1
          </ListTypography>
          <PaperSection>
            <Typography variant="h6" color="primary" fontWeight="medium">
              Original
            </Typography>
            <Paper elevation={5} variant="outlined">
              <DefinitionContain>
                <Definition>
                  <Typography variant="body2">
                    Chinese Principal Business Address
                  </Typography>
                  <Typography variant="h6">⾹港 中環 商業中⼼ 11樓 1101室</Typography>
                </Definition>
              </DefinitionContain>
            </Paper>
          </PaperSection>
          <Container>
            <CustomArrow src={arrow} />
          </Container>
          <PaperSection>
            <Typography variant="h6" color="primary" fontWeight="medium">
              New
            </Typography>
            <Paper elevation={5} variant="outlined">
              <DefinitionContain>
                <Definition>
                  <Typography variant="body2">
                    Chinese Principal Business Address
                  </Typography>
                  <Typography variant="h6">⾹港 中環 商業中⼼ 11樓 1101室</Typography>
                </Definition>
              </DefinitionContain>
            </Paper>
          </PaperSection>
        </SectionContainer>
      </Card>
    </Card>
  );
};

export default TrusteeInformation;
