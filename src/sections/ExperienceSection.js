import React from 'react'
import styled from 'styled-components'
import theme from '../utils/theme'
import { jobs, projects, courses } from '../utils/configs'

import Hr from '../components/Hr'
import Link from '../components/Link'
import Section from '../components/Section'
import Container from '../components/Container'
import Typography from '../components/Typography'
import { Flex, Box } from '../components/Grid'

import { AiOutlineEye, AiOutlineGithub } from "react-icons/ai";

import logoOne from '../images/logos/react.png'
import logoTwo from '../images/logos/react-native-v2.png'
import logoThree from '../images/logos/vue.png'
import logoFour from '../images/logos/github.png'
import logoFive from '../images/logos/gatsby.png'
import logoSix from '../images/logos/GraphQL.png'
import logoSeven from '../images/logos/netlify.png'
import logoEight from '../images/logos/shopify.png'
import logoNive from '../images/logos/contentful.png'

const ImageWrapper = styled(Box)`
  filter: brightness(0) contrast(0%);
`

const Line = styled.div`
  position: relative;
  width: ${p => p.width};
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100$;
    top: 0;
    border: 1px solid ${theme.colors.primary};
    margin-top: 2px;
    z-index: -1;
  }
`

const StyledExperience = styled(Box)`
  background: ${theme.colors.extended.gray800};
  border: 2px solid ${theme.colors.dark};
  border-radius: 6px;
  padding: 8px;
  margin-top: 10px;
  transition: all 0.3s ease-in-out;
  text-align: left;
  user-select: none;
  &:hover {
    background: ${p => p.background};
    border: 2px solid ${p => p.background};
  }
`

const tools = [
  {name: 'React', image: logoOne},
  {name: 'React Native', image: logoTwo},
  {name: 'Vue', image: logoThree},
  {name: 'Github', image: logoFour},
  {name: 'Gatsby', image: logoFive},
  {name: 'GraphQL', image: logoSix},
  {name: 'Netlify', image: logoSeven},
  {name: 'Shopify', image: logoEight},
  {name: 'Contentful', image: logoNive},
]
const ExperienceSection = () => {
  const defaults = {
    duration: '2021 - Current',
    position: 'Front End Web Developer',
    company: {
      name: 'Divelement',
      link: '',
      visualize: '/',
      github: '/',
    },
    rawDescription: '<p>Front end developer</p>',
  }
  const Experience = ({ contents = defaults, background = theme.colors.primary }) => {
    return (
      <StyledExperience background={background} id='experience'>
        <Typography tag='p' mb={0} fontSize={[1]} textAlign='right'>{contents.duration}</Typography>
        <Typography tag='h5' mb={0}>{contents.position}</Typography>
        <Box px={0} display='flex' justifyContent='space-between'>
          <Link href={contents.company.link} color={theme.colors.light}>{contents.company.name}</Link>
          <Flex>
            {contents.company.visualize && <Link href={contents.company.visualize}><AiOutlineEye color={theme.colors.light} style={{marginRight: contents.company.github && '6px', position: 'relative', top: '4px'}} /> </Link>}
            {contents.company.github && <Link href={contents.company.github}><AiOutlineGithub color={theme.colors.light} style={{marginLeft: '6px', position: 'relative', top: '4px'}} /> </Link>}
          </Flex>
        </Box>
        <Hr mt={2} mb={2} variant='horizontal' background={theme.colors.dark} />
        <Box px={0} maxHeight='200px' overflow='auto'>
          <Typography mb={0} dangerouslySetInnerHTML={{ __html: contents.rawDescription}}/>
        </Box>
      </StyledExperience>
    )
  }
  return (
    <Section id='experience'>
      <Container>
        <>
          <Typography tag='h4'>My experience <Line width={'150px'} /></Typography>
          <Typography tag='p'>I have a distinguished path working with international customers <br/>using the newest and best tools in the software enviroment.</Typography>

          <Flex mt={4} justifyContent='space-around' alignItems='center' >
            {tools.map((element, i) => (
              <ImageWrapper width={'120px'} key={i}><img src={element.image} alt={element.name} /></ImageWrapper>
              ))}
          </Flex>
        </>

        <>
          <Flex mt={4} justifyContent='space-between' textAlign='center'>
            <Box px={0} pr={[0,0,3]} mt={5} width={['100%','100%',1/3]}>
              <Box py={3} height={['auto','auto','100%']} background={theme.colors.extended.gray800} borderRadius={'6px'}>
                <Typography tag='h4' mb={0}>Jobs</Typography>
                <Hr mt={2} variant='horizontal' background={theme.colors.dark} />
                <Box px={0} overflow='auto' height={['auto','auto','100%']} maxHeight='950px'>
                  {jobs.map((element, i) => (
                    <Experience contents={element} key={i} />
                  ))}
                </Box>
              </Box>
            </Box>
            <Box px={[0,0,3]} mt={[5,5,0]} mb={[0,0,5]} width={['100%','100%',1/3]}>
              <Box py={3} height={['auto','auto','100%']} background={theme.colors.extended.gray800} borderRadius={'6px'}>
                <Typography tag='h4' mb={0}>Projects</Typography>
                <Hr mt={2} variant='horizontal' background={theme.colors.dark} />
                <Box px={0} overflow='auto' maxHeight='950px'>
                  {projects.map((element, i) => (
                    <Experience background={theme.colors.secondary.red500} contents={element} key={i} />
                  ))}
                </Box>
              </Box>
            </Box>
            <Box px={0} pl={[0,0,3]} mt={5} width={['100%','100%',1/3]}>
              <Box py={3} height={['auto','auto','100%']} background={theme.colors.extended.gray800} borderRadius={'6px'}>
                <Typography tag='h4' mb={0}>Courses</Typography>
                <Hr mt={2} variant='horizontal' background={theme.colors.dark} />
                <Box px={0} overflow='auto' maxHeight='950px'>
                  {courses.map((element, i) => (
                    <Experience background={theme.colors.secondary.green500} contents={element} key={i} />
                  ))}
                </Box>
              </Box>
            </Box>
          </Flex>
        </>

        <>
        <Flex mt={5} justifyContent='space-around' style={{userSelect: 'none'}}>
          <Typography tag='p' fontSize={2} color={theme.colors.extended.gray700} >Javascript - </Typography>
          <Typography tag='p' fontSize={2} color={theme.colors.extended.gray700} >HTML5 - </Typography>
          <Typography tag='p' fontSize={2} color={theme.colors.extended.gray700} >CSS3 - </Typography>
          <Typography tag='p' fontSize={2} color={theme.colors.extended.gray700} >SASS - </Typography>
          <Typography tag='p' fontSize={2} color={theme.colors.extended.gray700} >RestAPI - </Typography>
          <Typography tag='p' fontSize={2} color={theme.colors.extended.gray700} >JSON - </Typography>
          <Typography tag='p' fontSize={2} color={theme.colors.extended.gray700} >React - </Typography>
          <Typography tag='p' fontSize={2} color={theme.colors.extended.gray700} >Vue - </Typography>
          <Typography tag='p' fontSize={2} color={theme.colors.extended.gray700} >Git - </Typography>
          <Typography tag='p' fontSize={2} color={theme.colors.extended.gray700} >Node - </Typography>
          <Typography tag='p' fontSize={2} color={theme.colors.extended.gray700} >Firebase - </Typography>
          <Typography tag='p' fontSize={2} color={theme.colors.extended.gray700} >Postman - </Typography>
          <Typography tag='p' fontSize={2} color={theme.colors.extended.gray700} >VS Code - </Typography>
          <Typography tag='p' fontSize={2} color={theme.colors.extended.gray700} >Adobe XD</Typography>
        </Flex>
        </>

      </Container>
    </Section>
  )
}

export default ExperienceSection