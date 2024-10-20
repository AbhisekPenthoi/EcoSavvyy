import React from "react";
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useBreakpointValue,
  useColorModeValue
} from "@chakra-ui/react";

const Recommendations = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const recommendationItems = [
    {
      title: 'Improve Energy Efficiency',
      content: [
        'Upgrade Equipment: Replace outdated machinery with energy-efficient models to reduce fuel consumption and emissions.',
        'Optimize Operations: Implement best practices for equipment operation and maintenance to enhance efficiency and reduce unnecessary energy use.',
        'Energy Management Systems: Install systems to monitor and manage energy consumption in real-time.',
      ],
      bgColor: 'green.100',
      textColor: 'black',
      expandedBgColor: 'green.500',
      expandedTextColor: 'white',
      hoverBgColor: 'green.200',
    },
    {
      title: 'Transition to Cleaner Energy Sources',
      content: [
        'Invest in Renewable Energy: Explore options for on-site solar or wind power generation to reduce reliance.',
        'Carbon Offset: Purchase carbon credits to offset emissions from energy consumption.',
        'Energy Storage: Implement energy storage systems to optimize energy usage and reduce waste.',
      ],
      bgColor: 'teal.300',
      textColor: 'black',
      expandedBgColor: 'teal.700',
      expandedTextColor: 'white',
      hoverBgColor: 'teal.200',
    },
    {
      title: 'Enhance Carbon Capture and Storage (CCS)',
      content: [
        'Carbon Capture Technologies: Implement technologies that capture CO2 emissions from industrial processes.',
        'Storage Solutions: Develop and utilize storage solutions for captured CO2, such as underground geological formations.',
      ],
      bgColor: 'blue.300',
      textColor: 'black',
      expandedBgColor: 'blue.700',
      expandedTextColor: 'white',
      hoverBgColor: 'blue.200',
    },
    {
      title: 'Improve Mine Ventilation and Gas Management',
      content: [
        'Ventilation Systems: Upgrade ventilation systems to improve air quality and reduce the need for excessive ventilation that can contribute to higher energy use.',
        'Gas Management: Implement gas management systems to capture and utilize methane emissions from mines.',
      ],
      bgColor: 'blue.100',
      textColor: 'black',
      expandedBgColor: 'blue.500',
      expandedTextColor: 'white',
      hoverBgColor: 'blue.200',
    },
    {
      title: 'Optimize Mining Practices',
      content: [
        'Energy Efficiency: Implement energy-efficient technologies and practices to reduce energy consumption.',
        'Waste Reduction: Implement waste reduction strategies to minimize waste generation and environmental impact.',
        'Recycling and Reuse: Recycle materials and reuse by-products from mining operations to reduce overall emissions.',
      ],
      bgColor: 'orange.100',
      textColor: 'black',
      expandedBgColor: 'orange.500',
      expandedTextColor: 'white',
      hoverBgColor: 'orange.200',
    },
    {
      title: 'Implement Best Practices for Transportation',
      content: [
        'Efficient Logistics: Optimize transportation routes and methods to reduce fuel consumption and emissions from hauling materials.',
        'Alternative Fuels: Consider using alternative fuels, such as electric or hybrid vehicles.',
      ],
      bgColor: 'purple.100',
      textColor: 'black',
      expandedBgColor: 'purple.500',
      expandedTextColor: 'white',
      hoverBgColor: 'purple.200',
    },
    {
      title: 'Adopt Sustainable Mining Technologies',
      content: [
        'Hydraulic Mining: Use hydraulic mining methods that reduce the need for extensive drilling and blasting, thus lowering emissions.',
        'Automation and Remote Control: Implement automation and remote control technologies to enhance operational efficiency and reduce the need for on-site activities.',
      ],
      bgColor: 'teal.100',
      textColor: 'black',
      expandedBgColor: 'teal.500',
      expandedTextColor: 'white',
      hoverBgColor: 'teal.200',
    },
    {
      title: 'Enhance Land Reclamation and Rehabilitation',
      content: [
        'Revegetation: Implement land reclamation projects to restore vegetation and improve soil quality post-mining, which can help sequester carbon.',
        'Erosion Control: Use erosion control measures to prevent soil degradation and support carbon sequestration efforts.',
      ],
      bgColor: 'yellow.100',
      textColor: 'black',
      expandedBgColor: 'yellow.500',
      expandedTextColor: 'black',
      hoverBgColor: 'yellow.200',
    },
    {
      title: 'Promote Research and Innovation',
      content: [
        'Invest in R&D: Support research and development of new technologies and methods for reducing emissions and improving sustainability in mining.',
        'Collaborate with Experts: Partner with academic institutions and industry experts to stay updated on the latest advancements in emission reduction technologies.',
      ],
      bgColor: 'pink.100',
      textColor: 'black',
      expandedBgColor: 'pink.500',
      expandedTextColor: 'black',
      hoverBgColor: 'pink.200',
    },
    {
      title: 'Adhere to Regulatory and Reporting Standards',
      content: [
        'Compliance: Ensure adherence to local and international environmental regulations and standards.',
        'Transparency: Regularly report emissions and progress towards reduction goals to stakeholders and regulatory bodies.',
      ],
      bgColor: 'gray.100',
      textColor: 'black',
      expandedBgColor: 'gray.500',
      expandedTextColor: 'black',
      hoverBgColor: 'gray.200',
    },
  ];

  return (
    <Box mx={{ base: 4, md: 8, lg: 20 }} my={{ base: 6, md: 10 }} bg={bgColor} p={{ base: 4, md: 6 }} borderRadius="md" boxShadow="lg">
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={6} color={textColor}>
        Our Recommendations for Reducing Carbon Emissions
      </Text>
      
      <Accordion defaultIndex={[0]} allowMultiple>
        {recommendationItems.map((item, index) => (
          <AccordionItem key={index} borderBottom="1px" borderColor={borderColor}>
            <h2>
              <AccordionButton
                _expanded={{ bg: item.expandedBgColor, color: item.expandedTextColor }}
                bg={item.bgColor}
                color={item.textColor}
                borderRadius="md"
                _hover={{ bg: item.hoverBgColor }}
              >
                <Box as="span" flex="1" textAlign="left" fontWeight="semibold">
                  {item.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} pl={6}>
              <ul>
                {item.content.map((point, idx) => (
                  <li key={idx} style={{ marginBottom: '8px' }}>
                    {point}
                  </li>
                ))}
              </ul>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default Recommendations;
