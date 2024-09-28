import React from 'react';
import { Card, SimpleGrid, CardBody, CardFooter, Heading, Text, Button, CardHeader } from '@chakra-ui/react';

function WordCard() {
  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      <Card>
        <CardHeader>
          <Heading size='md'> Apple</Heading>
        </CardHeader>
        <CardBody>
          <Text>A green or red fruit</Text>
        </CardBody>
        <CardFooter>
          <Button>Learn more</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size='md'> Orange</Heading>
        </CardHeader>
        <CardBody>
          <Text>A dark yellow fruit</Text>
        </CardBody>
        <CardFooter>
          <Button>Learn more</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size='md'> Banana</Heading>
        </CardHeader>
        <CardBody>
          <Text>A yellow fruit</Text>
        </CardBody>
        <CardFooter>
          <Button>Learn more</Button>
        </CardFooter>
      </Card>
    </SimpleGrid>

  )
}

export default WordCard;