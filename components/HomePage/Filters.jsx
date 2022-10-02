import { Search2Icon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
} from '@chakra-ui/react';
import { filter } from '../../constant/filterConat';

const Filters = () => {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2'>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<Search2Icon color='gray.300' />}
        />
        <Input type='tel' placeholder='Enter an address city or Zip Code' />
      </InputGroup>
      <Spacer />
      <ButtonGroup gap='2'>
        {filter.map((buttonData, i) => (
          <Button key={i} {...buttonData}>
            {buttonData.name}
          </Button>
        ))}
      </ButtonGroup>
    </Flex>
  );
};

export default Filters;
