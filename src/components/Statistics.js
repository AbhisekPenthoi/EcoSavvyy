import React from 'react';
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import countryWiseEmissions from "../images/Co2.gif"; 
import reducedEmissions from "../images/co2-2.jpeg";   
import dailyEmissions from "../images/co2-3.png";     
import increment from "../images/increment.png";       

const Statistics = () => {
  return (
    <>
      <Box
        px={{ base: 4, md: 8, lg: 20 }}
        py={{ base: 6, md: 8, lg: 10 }}
        backgroundColor="gray.700"
        color="white"
        borderRadius="md"
      >
        {/* Welcome Section */}
        <Box mb={{ base: 6, md: 8 }}>
          <Heading textAlign="center" as="h1" mb={4} color="white" fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
            Some Alarming Statistics about CO2 Emissions from Indian Coal Mines
          </Heading>
          <Text fontSize={{ base: 'xl', md: '2xl' }} textAlign="center">
            Here are some critical statistics related to CO2 emissions from coal mines in India:
          </Text>
          <Box as="ul" listStyleType="disc" mx="auto" px={{ base: 4, md: 8 }} mt={4} fontSize={{ base: 'lg', md: 'xl' }}>
            <li>
              India is one of the largest producers and consumers of coal, significantly contributing to global CO2 emissions.
            </li>
            <li>
              Coal mining and combustion in India account for a substantial portion of the country's greenhouse gas emissions, with coal being a major source of CO2.
            </li>
            <li>
              The coal sector's emissions impact air quality, leading to increased respiratory issues and health problems among local populations.
            </li>
            <li>
              Efforts to reduce emissions include technological advancements and cleaner coal technologies, but challenges remain in balancing energy needs with environmental sustainability.
            </li>
          </Box>
        </Box>

        {/* Increase in CO2 Emissions Section */}
        <Box mb={{ base: 6, md: 8 }} display={{ base: "block", md: "flex" }} gap={{ base: 4, md: 8 }} alignItems="center">
          <Box flex={{ base: 1, md: 2 }} mb={{ base: 6, md: 0 }}>
            <Heading as="h2" size="lg" mb={4} textAlign="center">
              Increase in CO2 Emissions from Coal Mines over the Past 50 Years
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }}>
              This graph illustrates the significant rise in CO2 emissions from coal mines in India since the 1970s. The data shows a consistent increase, with some fluctuations, highlighting the growing environmental challenge posed by coal mining. Notable decreases in emissions were observed during the COVID-19 lockdown period in 2020.
            </Text>
          </Box>
          <Box flex={{ base: 1, md: 1 }}>
            <Image
              src={increment}
              alt="Increase in CO2 Emissions"
              borderRadius="md"
              boxShadow="md"
              maxW="100%"
            />
          </Box>
        </Box>

        {/* Country Wise Emissions Section */}
        <Box mb={{ base: 6, md: 8 }} display={{ base: "block", md: "flex" }} gap={{ base: 4, md: 8 }} alignItems="center">
          <Box flex={{ base: 1, md: 1 }} order={{ base: 2, md: 1 }}>
            <Image
              src={countryWiseEmissions}
              alt="Country Wise Emissions"
              borderRadius="md"
              boxShadow="md"
              maxW="100%"
            />
          </Box>
          <Box
            flex={{ base: 1, md: 1 }}
            order={{ base: 1, md: 2 }}
            ml={{ md: 4 }}
          >
            <Heading as="h2" size="lg" mb={4} textAlign="center">
              CO2 Emissions by Region in India
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }}>
              This chart provides a breakdown of CO2 emissions from coal mines across different regions in India. It highlights major emitting states and regions, showcasing the disparity in emissions and the need for targeted reduction strategies.
            </Text>
          </Box>
        </Box>

        {/* Reduced CO2 Emissions Section */}
        <Box mb={{ base: 6, md: 8 }} display={{ base: "block", md: "flex" }} gap={{ base: 4, md: 8 }} alignItems="center">
          <Box flex={{ base: 1, md: 2 }} mb={{ base: 6, md: 0 }}>
            <Heading as="h2" size="lg" mb={4} textAlign="center">
              Impact of COVID-19 on CO2 Emissions
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }}>
              This graph illustrates the reduction in CO2 emissions from coal mining in India during the COVID-19 lockdown in 2020. The temporary decline in emissions during this period demonstrates the significant impact of reduced industrial activity on air quality.
            </Text>
          </Box>
          <Box flex={{ base: 1, md: 1 }}>
            <Image
              src={reducedEmissions}
              alt="Reduced CO2 Emissions"
              borderRadius="md"
              boxShadow="md"
              maxW="100%"
            />
          </Box>
        </Box>

        {/* Daily Emission Analysis Section */}
        <Box mb={{ base: 6, md: 8 }} display={{ base: "block", md: "flex" }} gap={{ base: 4, md: 8 }} alignItems="center">
          <Box flex={{ base: 1, md: 1 }} order={{ base: 2, md: 1 }}>
            <Image
              src={dailyEmissions}
              alt="Daily Emission Analysis"
              borderRadius="md"
              boxShadow="md"
              maxW="100%"
            />
          </Box>
          <Box
            flex={{ base: 1, md: 1 }}
            order={{ base: 1, md: 2 }}
            ml={{ md: 4 }}
          >
            <Heading as="h2" size="lg" mb={4} textAlign="center">
              Daily CO2 Emissions Analysis
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }}>
              This graph provides an analysis of daily CO2 emissions from coal mines in India, covering the period from 1970 to projected estimates for 2050. It highlights trends and patterns in emissions over time, helping to understand the long-term impacts and necessary actions for reduction.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box backgroundColor="white" color="green.700" py={4} textAlign="center" fontWeight="bold">
        Made with 💚 Go Green ©ClimateCrew
      </Box>
    </>
  );
}

export default Statistics;
