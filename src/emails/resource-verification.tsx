import { ResourceType } from '@/types/resource';
import { UserType } from '@/types/user';
import {
  Body,
  Container,
  Head,
  Html,
  Link,
  Tailwind,
  Text,
  Img,
} from '@react-email/components';
import * as React from 'react';

export default function VerificationEmail({
  user,
  resource,
}: {
  user: UserType;
  resource: ResourceType | null;
}) {
  return (
    <Html>
      <Tailwind config={{}}>
        <Head />
        <Body className='bg-white'>
          <Container className='container'>
            <Link href='https://www.clubcesa.tech/me' className='mb-1'>
              <Img
                src='cid:mail-header'
                alt='CESA Community'
                className='pointer-events-none h-auto w-full cursor-pointer select-none object-cover'
                loading='eager'
              />
            </Link>
            <Text className='text-lg font-bold'>{`Hello, ${user.name},`}</Text>
            <Text>
              {`We just wanted to say a quick thanks for sharing your awesome
              resource, `}
              <span className='font-bold'>{resource?.title ?? ''}</span>
              {`. It's clear you put a lot of thought
              and effort into it, and we know it'll be incredibly helpful to our
              dev community.`}
            </Text>

            <Text>
              Now you can see your verified resource at{' '}
              <Link href='https://www.clubcesa.tech/learn'>
                clubcesa.tech/learn{' '}
              </Link>
              or at your profile{' '}
              <Link href='https://www.clubcesa.tech/me'>clubcesa.tech/me</Link>
            </Text>

            <Text className='text-base font-bold'>Maintaining Accuracy:</Text>
            <Text>
              To ensure the most accurate and helpful information reaches our
              community, we may occasionally make minor edits to shared
              resources. These edits could involve correcting factual
              inaccuracies, improving clarity, or ensuring adherence to our
              community guidelines.
            </Text>

            <Text className='text-base font-bold'>
              Transparency and Communication:
            </Text>
            <Text>
              {`We value your contribution and will always notify you of any
              changes made to your resource. Should you find any edits that you
              believe are incorrect, please don't hesitate to reach out to us at `}
              <Link href='mailto:connect.cesaofficial@gmail.com'>
                connect.cesaofficial@gmail.com
              </Link>
              {`. We're always happy to collaborate
              and ensure your resource remains valuable to the community.`}
            </Text>

            <Text>Keep sharing your wisdom!</Text>

            <Text className='text-base font-bold'>
              Best,
              <br />
              CESA Official
            </Text>
            <Link href='https://www.clubcesa.tech/me' className='mt-2'>
              <Img
                src='cid:mail-footer'
                alt='CESA Community'
                className='pointer-events-none h-auto w-full cursor-pointer select-none object-cover'
                loading='eager'
              />
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
