import { Box, HStack, Icon, Stack, StackProps, Text } from '@chakra-ui/react';
import { RiShieldStarLine, } from 'react-icons/ri'
import { FaMoneyBillWave } from 'react-icons/fa'
import { BsArrowRepeat } from 'react-icons/bs'
import { VscDebugRestart } from "react-icons/vsc";
import { BsTagsFill } from "react-icons/bs";

interface FeatureProps extends StackProps {
  icon: React.ElementType;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing='6'>
      <Icon as={icon} boxSize='12' color='purple.700' />
      <Text textAlign='left' fontSize='lg' fontWeight='bold'>
        {children}
      </Text>
    </HStack>
  );
}

export function Features() {
  return (
    <Box maxW='1024px' m='auto' pt='60px' pb='8' as='section'>
      <Stack
        px='12'
        direction={['column', 'column', 'row']}
        spacing={['6', '6', '5']}
      >
        <Feature icon={RiShieldStarLine}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={BsTagsFill}>
          No setup fees 100% hassle-free
        </Feature>
        <Feature icon={VscDebugRestart}>  
          No monthly subscription Pay once and for all
        </Feature>                 
      </Stack>
    </Box>
  );
}