import React from 'react';
import { Box, Heading, Text, Image, List, ListItem, UnorderedList, OrderedList } from "@chakra-ui/react";
import countryWiseEmissions from "../images/Co2.gif";
import reducedEmissions from "../images/co2-2.jpeg";
import dailyEmissions from "../images/co2-3.png";
import increment from "../images/increment.png";

const Effects = () => {
  return (
    <>
      <Box
        px={60}
        py={20}
        fontSize="lg"
        bg="gray.700"
        color="white"
      >
        {/* Welcome Section */}
        <Box textAlign="center" mb={8}>
          <Heading as="h2" mb={4}>
            Effects of CO2 Emissions from Coal Mines in India
          </Heading>
        </Box>

        <OrderedList spacing={4} styleType="decimal">
          <ListItem fontWeight="bold" fontSize="xl">
            Climate Change
            <UnorderedList spacing={2} mt={2}>
              <ListItem>
                <Text as="p">
                  <strong>Global Warming:</strong> CO2 is a major greenhouse gas contributing to global warming. The increased concentration of CO2 in the atmosphere traps heat, leading to rising global temperatures and climate change.
                </Text>
              </ListItem>
              <ListItem>
                <Text as="p">
                  <strong>Regional Climate Effects:</strong> In India, climate change can exacerbate extreme weather events, such as heatwaves, heavy monsoons, and shifting rainfall patterns, impacting agriculture, water resources, and ecosystems.
                </Text>
              </ListItem>
            </UnorderedList>
          </ListItem>

          <ListItem fontWeight="bold" fontSize="xl">
            Air Quality and Health Issues
            <UnorderedList spacing={2} mt={2}>
              <ListItem>
                <Text as="p">
                  <strong>Respiratory Problems:</strong> High CO2 levels often accompany other pollutants, such as particulate matter (PM), sulfur dioxide (SO2), and nitrogen oxides (NOx), which can lead to respiratory issues and cardiovascular diseases.
                </Text>
              </ListItem>
              <ListItem>
                <Text as="p">
                  <strong>Public Health:</strong> Prolonged exposure to poor air quality can result in chronic health conditions, including asthma, bronchitis, and other lung diseases, affecting both miners and nearby communities.
                </Text>
              </ListItem>
            </UnorderedList>
          </ListItem>

          <ListItem fontWeight="bold" fontSize="xl">
            Environmental Degradation
            <UnorderedList spacing={2} mt={2}>
              <ListItem>
                <Text as="p">
                  <strong>Ecosystem Disruption:</strong> Increased CO2 levels can alter local ecosystems and biodiversity. Changes in temperature and precipitation patterns can affect plant and animal species, disrupting natural habitats.
                </Text>
              </ListItem>
              <ListItem>
                <Text as="p">
                  <strong>Soil Quality:</strong> Higher temperatures and altered precipitation can affect soil health, impacting agriculture and leading to increased erosion and reduced fertility.
                </Text>
              </ListItem>
            </UnorderedList>
          </ListItem>

          <ListItem fontWeight="bold" fontSize="xl">
            Impact on Water Resources
            <UnorderedList spacing={2} mt={2}>
              <ListItem>
                <Text as="p">
                  <strong>Water Scarcity:</strong> Climate change driven by CO2 emissions can affect the availability and distribution of water resources, exacerbating water scarcity issues in already vulnerable regions of India.
                </Text>
              </ListItem>
              <ListItem>
                <Text as="p">
                  <strong>Pollution:</strong> Mining activities often lead to the contamination of water sources with pollutants, further stressing water resources and impacting aquatic life.
                </Text>
              </ListItem>
            </UnorderedList>
          </ListItem>
        </OrderedList>
      </Box>

      <Box
        bg="green.700"
        color="white"
        py={4}
        textAlign="center"
        fontWeight="bold"
      >
        {/* Placeholder for additional content or footer */}
      </Box>
    </>
  );
};

export default Effects;
