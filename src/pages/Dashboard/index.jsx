import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Heading, Img, Button, SelectBox, GoogleMap, Input } from "../../components";
import { SubMenu, MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function DashboardPage() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Brajesh's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row md:flex-col justify-center items-start w-full pb-[68px] md:gap-5 md:pb-5 bg-gray-50">
        <Sidebar width="252px !important" className="h-screen top-0 bg-white-A700 shadow-sm !sticky overflow-auto">
          <Img src="images/img_group_18298.svg" alt="image" className="h-[30px] mt-6 ml-7 mr-[97px] md:mr-5 sm:mx-5" />
          <Menu
            menuItemStyles={{
              button: {
                padding: "10px 10px 10px 28px",
                width: "100%",
                color: "#8c8787",
                fontWeight: 400,
                fontSize: "16px",
                gap: "12px",
                [`&:hover, &.ps-active`]: {
                  color: "#438ffe",
                  fontWeight: "500 !important",
                  backgroundColor: "#edf5ff !important",
                },
              },
            }}
            renderExpandIcon={() => (
              <Img src="images/img_arrow_right.svg" alt="arrowright_one" className="h-[24px] w-[24px] cursor-pointer" />
            )}
            className="flex flex-col items-center justify-start w-full mt-[65px]"
          >
            <MenuItem icon={<Img src="images/img_circlesfour.svg" alt="image_one" className="h-[20px] w-[20px]" />}>
              Dashboard
            </MenuItem>
            <SubMenu
              label={
                <div className="flex flex-row justify-start items-center gap-3">
                  <Img src="images/img_frame_17.svg" alt="image_two" className="h-[20px] w-[20px]" />
                  <Text size="lg" as="p">
                    Orders
                  </Text>
                </div>
              }
            >
              <MenuItem>Submenu Item</MenuItem>
            </SubMenu>
            <SubMenu
              label={
                <div className="flex flex-row justify-start items-center gap-3">
                  <Img src="images/img_frame_18.svg" alt="image_three" className="h-[20px] w-[20px]" />
                  <Text size="lg" as="p">
                    Menus
                  </Text>
                </div>
              }
            >
              <MenuItem>Submenu Item</MenuItem>
            </SubMenu>
            <SubMenu
              label={
                <div className="flex flex-row justify-start items-center gap-3">
                  <Img src="images/img_frame_19.svg" alt="image_four" className="h-[20px] w-[20px]" />
                  <Text size="lg" as="p">
                    Customer
                  </Text>
                </div>
              }
            >
              <MenuItem>Submenu Item</MenuItem>
            </SubMenu>
            <MenuItem icon={<Img src="images/img_frame_20.svg" alt="image_five" className="h-[20px] w-[20px]" />}>
              Analytics
            </MenuItem>
            <SubMenu
              label={
                <div className="flex flex-row justify-start items-center gap-3">
                  <Img src="images/img_frame_21.svg" alt="image_six" className="h-[20px] w-[20px]" />
                  <Text size="lg" as="p">
                    Table{" "}
                  </Text>
                </div>
              }
            >
              <MenuItem>Submenu Item</MenuItem>
            </SubMenu>
          </Menu>
          <div className="flex flex-col items-start justify-start w-[76%] mt-[276px] mb-[84px] mx-auto">
            <Img
              src="images/img_group_18692.png"
              alt="image_seven"
              className="w-full md:h-auto sm:w-full object-cover"
            />
            <Text size="s" as="p" className="mt-[23px] ml-px md:ml-0 !font-medium">
              Bistro Restaurant Admin{" "}
            </Text>
            <Text size="xs" as="p" className="mt-1.5 ml-px md:ml-0">
              2021 All Rights
            </Text>
            <div className="flex flex-row justify-start mt-[5px] gap-0.5">
              <Text size="xs" as="p">
                Made with
              </Text>
              <Img src="images/img_heart.svg" alt="heart_one" className="h-[12px]" />
              <Text size="xs" as="p">
                by Bistro
              </Text>
            </div>
          </div>
        </Sidebar>
        <div className="flex flex-col items-center justify-start w-[83%] md:w-full gap-[37px]">
          <header className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs">
            <div className="flex flex-row sm:flex-col justify-between items-center w-[99%] sm:gap-10">
              <Input
                shape="round"
                name="search"
                placeholder="Search here"
                value={searchBarValue1}
                onChange={(e) => setSearchBarValue1(e)}
                suffix={
                  searchBarValue1?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue1("")} height={16} width={16} fillColor="#8c8787ff" />
                  ) : (
                    <Img src="images/img_frame_7.svg" alt="Frame 7" className="cursor-pointer" />
                  )
                }
                className="w-[29%] sm:w-full gap-[35px] border-gray-50"
              />
              <div className="flex flex-row justify-between items-center w-auto">
                <Button color="gray_50" size="lg" className="w-[35px] rounded-[17px]">
                  <Img src="images/img_group_257.svg" />
                </Button>
                <Button color="gray_50" size="lg" className="w-[35px] rounded-[17px]">
                  <Img src="images/img_group_259.svg" />
                </Button>
                <Img
                  src="images/img_ellipse_1.png"
                  alt="circleimage"
                  className="h-[40px] w-[40px] md:h-auto rounded-[50%]"
                />
              </div>
            </div>
          </header>
          <div className="flex flex-col items-start justify-start w-[94%] md:w-full gap-[31px]">
            <div className="flex flex-col items-start justify-start gap-[7px]">
              <Text size="xl" as="p">
                Dashboard
              </Text>
              <Text size="lg" as="p" className="!text-blue_gray-400">
                Wellcome to Lojusa Admin
              </Text>
            </div>
            <div className="flex flex-row md:flex-col w-full gap-[30px]">
              <div className="flex flex-row justify-start items-center w-[23%] md:w-full gap-6 p-[30px] sm:p-5 bg-white-A700 shadow-md rounded-[10px]">
                <Button color="blue_50" size="4xl" shape="circle" className="w-[70px]">
                  <Img src="images/img_group_18300.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[40%] mr-[23px] gap-[7px] sm:mr-5">
                  <Heading size="lg" as="h1">
                    2560
                  </Heading>
                  <Text as="p" className="!text-blue_gray-400 !font-normal">
                    Total Menus
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[23%] md:w-full gap-6 p-[30px] sm:p-5 bg-white-A700 shadow-md rounded-[10px]">
                <Button color="blue_50" size="4xl" shape="circle" className="w-[70px]">
                  <Img src="images/img_group_18276.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[47%] mr-2.5 gap-1.5">
                  <Heading size="lg" as="h2">
                    $87,256
                  </Heading>
                  <Text as="p" className="!text-blue_gray-400 !font-normal">
                    Total Revenew
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[23%] md:w-full gap-6 p-[30px] sm:p-5 bg-white-A700 shadow-md rounded-[10px]">
                <Button color="blue_50" size="4xl" shape="circle" className="w-[70px]">
                  <Img src="images/img_group_18277.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[50%] mr-[5px] gap-[7px]">
                  <Heading size="lg" as="h3">
                    2560k
                  </Heading>
                  <Text as="p" className="!text-blue_gray-400 !font-normal">
                    Total Customer
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[23%] md:w-full gap-6 p-[30px] sm:p-5 bg-white-A700 shadow-md rounded-[10px]">
                <Button color="blue_50" size="4xl" shape="circle" className="w-[70px]">
                  <Img src="images/img_group_18278.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[37%] gap-[7px]">
                  <Heading size="lg" as="h4">
                    2560
                  </Heading>
                  <Text as="p" className="!text-blue_gray-400 !font-normal">
                    Total Oders
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-col justify-start w-full gap-[30px] md:gap-5">
              <div className="flex flex-col items-center justify-start w-[49%] md:w-full gap-[30px]">
                <div className="flex flex-col items-center justify-center w-full gap-5 p-4 bg-white-A700 shadow-md rounded-[15px]">
                  <div className="flex flex-row justify-between items-start w-[99%] md:w-full mt-[9px]">
                    <Text size="lg" as="p" className="mt-1 !font-medium">
                      Revenue
                    </Text>
                    <SelectBox
                      color="blue_50"
                      variant="outline"
                      shape="round"
                      indicator={<Img src="images/img_frame_11.svg" alt="Frame 11" />}
                      name="monthly"
                      placeholder="Monthly"
                      options={dropDownOptions}
                      className="w-[21%] gap-px"
                    />
                  </div>
                  <div className="flex flex-row justify-between items-center w-[99%] md:w-full">
                    <div className="flex flex-col items-start justify-start gap-[3px]">
                      <Heading size="xs" as="h5" className="!text-blue-A200">
                        Income
                      </Heading>
                      <Text size="s" as="p" className="!font-medium">
                        $1236598
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between items-center w-[38%] p-1 border-blue-50 border border-solid rounded-[14px]">
                      <div className="flex flex-row justify-center ml-[5px]">
                        <Text
                          size="s"
                          as="p"
                          className="flex justify-center items-center w-[35px] h-[20px] px-2.5 py-0.5 !text-white-A700 bg-blue-A200 rounded-[10px]"
                        >
                          All
                        </Text>
                      </div>
                      <Text size="s" as="p" className="text-center">
                        Food
                      </Text>
                      <Text size="s" as="p" className="mr-[5px] text-right">
                        Beverages
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-center items-start w-full mb-1.5 sm:gap-5">
                    <div className="flex flex-col items-end justify-start w-[6%] sm:w-full gap-[25px]">
                      <Text size="s" as="p" className="!text-blue_gray-400 tracking-[0.40px] text-right">
                        $40k
                      </Text>
                      <Text size="s" as="p" className="!text-blue_gray-400 tracking-[0.40px] text-right">
                        $30k
                      </Text>
                      <Text size="s" as="p" className="!text-blue_gray-400 tracking-[0.40px] text-right">
                        $20k
                      </Text>
                      <Text size="s" as="p" className="!text-blue_gray-400 tracking-[0.40px] text-right">
                        $10k
                      </Text>
                      <Text size="s" as="p" className="!text-gray-500 tracking-[0.40px] !font-montserrat text-right">
                        0
                      </Text>
                    </div>
                    <div className="flex flex-row justify-center w-[95%] sm:w-full mt-[7px] sm:mt-0">
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-row justify-center w-full">
                          <div className="flex flex-col items-center justify-start w-full gap-[3px]">
                            <div className="flex flex-row sm:flex-col justify-center items-center w-[95%] md:w-full sm:gap-5">
                              <div className="h-[163px] w-px sm:w-full sm:h-px z-[1] bg-blue-50" />
                              <div className="h-[162px] w-full relative">
                                <div className="flex flex-row justify-between w-max h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                                  <div className="h-[163px] w-px bg-blue-50" />
                                  <div className="h-[163px] w-px bg-blue-50" />
                                  <div className="h-[163px] w-px bg-blue-50" />
                                  <div className="h-[163px] w-px bg-blue-50" />
                                  <div className="h-[163px] w-px bg-blue-50" />
                                </div>
                                <Img
                                  src="images/img_chart.png"
                                  alt="chart_one"
                                  className="h-[88px] w-full sm:w-full bottom-[14%] right-0 left-0 m-auto object-cover absolute"
                                />
                              </div>
                              <div className="h-[163px] w-px sm:w-full sm:h-px ml-px sm:ml-0 bg-blue-50" />
                            </div>
                            <div className="flex flex-col items-center justify-start w-full gap-[3px]">
                              <div className="h-px w-full bg-gray-300" />
                              <div className="flex flex-row justify-between w-full">
                                <div className="flex flex-row justify-between w-auto gap-[53px]">
                                  <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                    Mon
                                  </Text>
                                  <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                    Tue
                                  </Text>
                                  <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                    Wed
                                  </Text>
                                  <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                    Thu
                                  </Text>
                                </div>
                                <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                  Fri
                                </Text>
                                <div className="flex flex-row justify-between w-auto gap-[55px]">
                                  <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                    Sat
                                  </Text>
                                  <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                    Sun
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Tabs
                  className="flex flex-col items-center justify-center w-full gap-6 p-[18px] bg-white-A700 shadow-md rounded-[15px]"
                  selectedTabClassName="!text-white-A700 bg-blue-A200 rounded-[10px]"
                  selectedTabPanelClassName="mb-[7px] relative tab-panel--selected"
                >
                  <div className="flex flex-row justify-between items-center w-full mt-[7px]">
                    <Text size="lg" as="p" className="!font-medium">
                      Customer Map
                    </Text>
                    <TabList className="flex flex-row justify-center gap-7 p-[5px] border-blue-50 border border-solid rounded-[15px]">
                      <Tab className="ml-1 text-gray-700_01 text-xs font-normal">Today</Tab>
                      <Tab className="text-white-A700 text-xs font-normal">Month</Tab>
                      <Tab className="mr-1 text-gray-700_01 text-xs font-normal">Weekly</Tab>
                    </TabList>
                  </div>
                  {[...Array(3)].map((_, index) => (
                    <TabPanel key={`tab-panel${index}`} className="justify-center w-full absolute">
                      <div className="flex flex-row justify-center w-full mb-[7px]">
                        <div className="flex flex-row justify-center w-full">
                          <div className="flex flex-row justify-center w-full">
                            <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-3 sm:gap-5">
                              <div className="flex flex-col items-start justify-start w-[5%] sm:w-full mt-1.5 gap-[7px] sm:mt-0">
                                <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                  500
                                </Text>
                                <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                  400
                                </Text>
                                <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                  300
                                </Text>
                                <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                  200
                                </Text>
                                <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                  100
                                </Text>
                                <Text size="s" as="p" className="h-[15px] !text-blue_gray-400 text-center">
                                  90
                                </Text>
                                <Text size="s" as="p" className="h-[15px] !text-blue_gray-400 text-center">
                                  70
                                </Text>
                                <Text size="s" as="p" className="h-[15px] !text-blue_gray-400 text-center">
                                  60
                                </Text>
                                <Text size="s" as="p" className="h-[15px] !text-blue_gray-400 text-center">
                                  50
                                </Text>
                              </div>
                              <div className="flex flex-row justify-start w-[94%] sm:w-full">
                                <div className="flex flex-col items-center justify-start w-full gap-[11px]">
                                  <div className="h-[202px] w-[99%] md:w-full relative">
                                    <div className="flex flex-col items-end justify-start w-[99%] top-0 right-0 left-0 m-auto absolute">
                                      <div className="flex flex-col items-start justify-start w-full">
                                        <div className="flex flex-col items-start justify-start w-full">
                                          <div className="h-[117px] w-[3%] ml-11 md:ml-5 rounded-tr-[50%] rounded-tl-[50%] z-[1] bg-blue-A200" />
                                          <div className="flex flex-row sm:flex-col justify-start items-center mt-[-74px] sm:gap-5">
                                            <Img
                                              src="images/img_group_36.svg"
                                              alt="image_eight"
                                              className="h-[122px] z-[1]"
                                            />
                                            <div className="h-px w-full ml-[-10px] sm:ml-0 bg-blue-50" />
                                          </div>
                                        </div>
                                        <Img
                                          src="images/img_group_36.svg"
                                          alt="image_nine"
                                          className="h-[100px] mt-[-90px] ml-[133px] md:ml-5"
                                        />
                                      </div>
                                      <Img
                                        src="images/img_group_36.svg"
                                        alt="image_ten"
                                        className="h-[100px] mt-[-99px] mr-[43px] md:mr-5"
                                      />
                                    </div>
                                    <div className="flex flex-row sm:flex-col justify-center items-center w-full h-max left-0 bottom-0 right-0 top-0 m-auto sm:gap-5 absolute">
                                      <div className="h-px w-[99%] bg-blue-50" />
                                      <Img
                                        src="images/img_group_36.svg"
                                        alt="image_eleven"
                                        className="h-[189px] ml-[-6px] sm:ml-0"
                                      />
                                    </div>
                                    <div className="h-px w-[99%] bottom-[13%] right-0 left-0 m-auto bg-blue-50 absolute" />
                                    <div className="h-px w-[99%] bottom-[24%] right-0 left-0 m-auto bg-blue-50 absolute" />
                                    <div className="flex flex-col items-start justify-start w-[99%] bottom-[24%] right-0 left-0 m-auto absolute">
                                      <div className="h-px w-full z-[1] bg-blue-50" />
                                      <div className="h-[24px] w-[3%] ml-[46px] md:ml-5 rounded-tr-[50%] rounded-tl-[50%] bg-orange-300_01" />
                                    </div>
                                    <div className="flex flex-col items-end justify-start w-[99%] top-[10%] right-0 left-0 m-auto absolute">
                                      <Img
                                        src="images/img_group_36.svg"
                                        alt="image_twelve"
                                        className="h-[140px] mr-[178px] md:mr-5 z-[1]"
                                      />
                                      <div className="flex flex-col items-end justify-start w-full mt-[-77px]">
                                        <div className="h-px w-full bg-blue-50" />
                                        <Img
                                          src="images/img_group_43.svg"
                                          alt="image_thirteen"
                                          className="h-[89px] mr-[132px] md:mr-5"
                                        />
                                      </div>
                                    </div>
                                    <div className="h-px w-[99%] top-[19%] right-0 left-0 m-auto bg-blue-50 absolute" />
                                    <div className="h-px w-[99%] top-[30%] right-0 left-0 m-auto bg-blue-50 absolute" />
                                    <div className="h-px w-[99%] top-[7%] right-0 left-0 m-auto bg-blue-50 absolute" />
                                    <Img
                                      src="images/img_group_36.svg"
                                      alt="image_fourteen"
                                      className="h-[189px] bottom-0 left-[20%] m-auto absolute"
                                    />
                                    <Img
                                      src="images/img_group_43.svg"
                                      alt="image_fifteen"
                                      className="h-[61px] bottom-[24%] left-[39%] m-auto absolute"
                                    />
                                    <Img
                                      src="images/img_group_36.svg"
                                      alt="image_sixteen"
                                      className="justify-center h-[123px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                    />
                                    <Img
                                      src="images/img_group_36.svg"
                                      alt="image_seventeen"
                                      className="h-[140px] right-[19%] top-[12%] m-auto absolute"
                                    />
                                  </div>
                                  <div className="flex flex-row justify-between w-full">
                                    <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                      Jan
                                    </Text>
                                    <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                      Feb
                                    </Text>
                                    <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                      Mar
                                    </Text>
                                    <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                      Apr
                                    </Text>
                                    <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                      May
                                    </Text>
                                    <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                      Jun
                                    </Text>
                                    <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                      July
                                    </Text>
                                    <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                      Aug
                                    </Text>
                                    <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                      Sep
                                    </Text>
                                    <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                      Oct
                                    </Text>
                                    <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                                      Nov
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  ))}
                </Tabs>
              </div>
              <div className="flex flex-col items-center justify-start w-[49%] md:w-full gap-[30px]">
                <div className="flex flex-col items-center justify-center w-full gap-[21px] p-5 bg-white-A700 shadow-md rounded-[15px]">
                  <div className="flex flex-row justify-between items-start w-full mt-1.5">
                    <Text size="lg" as="p" className="mt-1 !font-medium">
                      Order Summary
                    </Text>
                    <SelectBox
                      color="blue_50"
                      variant="outline"
                      shape="round"
                      indicator={<Img src="images/img_frame_11.svg" alt="Frame 11" />}
                      name="monthly_one"
                      placeholder="Monthly"
                      options={dropDownOptions}
                      className="w-[21%] gap-px"
                    />
                  </div>
                  <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-row sm:flex-col justify-start items-center w-full sm:gap-5 border-blue-50 border border-solid rounded-[5px]">
                      <div className="flex flex-col items-start justify-start w-[15%] sm:w-full ml-[19px] gap-1 sm:ml-0">
                        <Text size="lg" as="p" className="!font-medium">
                          1256K
                        </Text>
                        <Text as="p" className="!text-blue_gray-400 !font-normal">
                          On Delivery{" "}
                        </Text>
                      </div>
                      <div className="h-[59px] w-px sm:w-full sm:h-px ml-[35px] sm:ml-5 bg-blue-50" />
                      <div className="flex flex-col items-start justify-start w-[19%] sm:w-full ml-5 gap-[3px] sm:ml-0">
                        <Text size="lg" as="p" className="!font-medium">
                          452K
                        </Text>
                        <Text as="p" className="!text-blue_gray-400 !font-normal">
                          Total Delivered
                        </Text>
                      </div>
                      <div className="h-[59px] w-px sm:w-full sm:h-px ml-[11px] sm:ml-0 bg-blue-50" />
                      <div className="flex flex-col items-start justify-start w-[12%] sm:w-full ml-[19px] gap-[3px] sm:ml-0">
                        <Text size="lg" as="p" className="!font-medium">
                          25K
                        </Text>
                        <Text as="p" className="!text-blue_gray-400 !font-normal">
                          Canceled
                        </Text>
                      </div>
                      <div className="h-[59px] w-px sm:w-full sm:h-px ml-[47px] md:ml-5 bg-blue-50" />
                      <div className="flex flex-col items-start justify-start w-[16%] sm:w-full ml-[19px] gap-[3px] sm:ml-0">
                        <Text size="lg" as="p" className="!font-medium">
                          2256K
                        </Text>
                        <Text as="p" className="!text-blue_gray-400 !font-normal">
                          Total Proses
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full mb-1.5">
                    <div className="flex flex-row justify-center w-full p-2.5 bg-gray-100 rounded-[5px]">
                      <div className="flex flex-row justify-between items-center w-[98%] mx-[5px]">
                        <Text as="p">New Order</Text>
                        <div className="flex flex-row justify-center">
                          <Button color="green_500" shape="round" className="w-full font-medium">
                            2512k
                          </Button>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-1">
                          <a href="#">
                            <Text as="p" className="!text-blue-A200">
                              Viwe All
                            </Text>
                          </a>
                          <Img src="images/img_frame_24.svg" alt="image_eighteen" className="h-[12px] w-[12px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-6 py-5 bg-white-A700 shadow-md rounded-[15px]">
                  <div className="flex flex-row justify-between items-center w-[93%] md:w-full">
                    <Text size="lg" as="p" className="!text-gray-700 !font-medium">
                      Deliyvery Map
                    </Text>
                    <SelectBox
                      color="blue_50"
                      variant="outline"
                      shape="round"
                      indicator={<Img src="images/img_caretdown.svg" alt="caret-down" />}
                      name="monthly_two"
                      placeholder="Monthly"
                      options={dropDownOptions}
                      className="w-[21%] gap-px"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-[25px]">
                    <div className="h-[189px] w-full relative">
                      <GoogleMap
                        showMarker={false}
                        className="justify-center h-[189px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
                      />
                      <Img
                        src="images/img_group_18769.png"
                        alt="image_nineteen"
                        className="h-[137px] w-[76%] sm:w-full left-[9%] bottom-0 top-0 m-auto object-cover absolute"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[93%] md:w-full gap-[22px]">
                      <Text size="lg" as="p" className="ml-0.5 md:ml-0 !font-medium">
                        Upcomming Sehedule
                      </Text>
                      <div className="flex flex-col w-full gap-[11px] md:gap-[2.75px]">
                        <div className="flex flex-col items-center justify-start w-full pb-[11px]">
                          <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                            <div className="flex flex-row justify-start items-center w-[40%] sm:w-full gap-1.5">
                              <Img
                                src="images/img_rectangle_4099.png"
                                alt="image"
                                className="w-[30px] md:h-auto object-cover rounded-sm"
                              />
                              <div className="flex flex-col items-center justify-start w-[82%] gap-px">
                                <Text as="p" className="!font-normal">
                                  <span className="text-gray-700_01">Mohan Cudhidi</span>
                                  <span className="text-blue-A200 font-medium">(4 Iteam )</span>
                                </Text>
                                <Text size="s" as="p" className="!text-blue_gray-400">
                                  Will be shipping on 11 : 24 Am
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row justify-start w-[41%] sm:w-full gap-1">
                              <div className="flex flex-col items-end justify-start w-[84%] gap-px">
                                <Text size="s" as="p">
                                  1111 Hex Parker Rd. Allentown,
                                </Text>
                                <Text size="s" as="p" className="text-right">
                                  South Africa
                                </Text>
                              </div>
                              <Button size="xs" shape="circle" className="w-[30px]">
                                <Img src="images/img_heroicons_outli.svg" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="w-[494px] h-px bg-blue-50" />
                        <div className="flex flex-row sm:flex-col justify-between items-start w-full sm:gap-10">
                          <div className="flex flex-row justify-start items-center w-[40%] sm:w-full mb-[3px] gap-1.5">
                            <Img
                              src="images/img_rectangle_4099_30x30.png"
                              alt="image"
                              className="w-[30px] md:h-auto object-cover rounded-sm"
                            />
                            <div className="flex flex-col items-center justify-start w-[82%] gap-px">
                              <Text as="p" className="!font-normal">
                                <span className="text-gray-700_01">Nohan Cudhidi</span>
                                <span className="text-blue-A200"></span>
                                <span className="text-blue-A200 font-medium">(2 Iteam )</span>
                              </Text>
                              <Text size="s" as="p" className="!text-blue_gray-400">
                                Will be shipping on 12 : 24 Am
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start items-center w-[42%] sm:w-full mt-[5px] gap-1.5 sm:mt-0">
                            <div className="flex flex-col items-end justify-start w-[83%]">
                              <Text size="s" as="p">
                                1111 Parker Rd. Allentown, New{" "}
                              </Text>
                              <Text size="s" as="p" className="text-right">
                                United states
                              </Text>
                            </div>
                            <Button size="xs" shape="circle" className="w-[30px]">
                              <Img src="images/img_heroicons_outli.svg" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[30px] md:gap-5">
              <div className="flex flex-col items-center justify-center w-[66%] md:w-full gap-6 p-5 bg-white-A700 shadow-md rounded-[15px]">
                <div className="flex flex-row justify-between items-center w-full mt-2">
                  <Text size="lg" as="p" className="!font-medium">
                    Recent Oder Request
                  </Text>
                  <SelectBox
                    color="blue_50"
                    variant="outline"
                    shape="round"
                    indicator={<Img src="images/img_caretdown.svg" alt="caret-down" />}
                    name="monthly_three"
                    placeholder="Monthly"
                    options={dropDownOptions}
                    className="w-[16%] gap-px"
                  />
                </div>
                <div className="flex flex-col w-full mb-2 gap-3 md:gap-[3px]">
                  <div className="flex flex-row md:flex-col justify-between items-center w-full ml-[3px] md:gap-10">
                    <div className="flex flex-row sm:flex-col justify-center items-center w-[78%] md:w-full sm:gap-5">
                      <div className="flex flex-row justify-start items-center w-[46%] sm:w-full gap-[9px]">
                        <Img
                          src="images/img_rectangle_4144.png"
                          alt="image"
                          className="w-[21%] md:h-auto sm:w-full object-cover rounded"
                        />
                        <div className="flex flex-col items-start justify-start w-[76%] gap-[3px]">
                          <Text as="p" className="w-[99%] ml-0.5 md:ml-0">
                            <>
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </>
                          </Text>
                          <Text size="s" as="p" className="!text-blue-A200 !font-medium">
                            #012365
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[27%] sm:w-full ml-[41px] gap-0.5 md:ml-5">
                        <Text as="p">Marvin McKinney</Text>
                        <Text size="s" as="p" className="!text-blue_gray-400 leading-4">
                          3891 Ranchview Dr. California 62639
                        </Text>
                      </div>
                      <Text as="p" className="ml-7 sm:ml-5">
                        $12.5
                      </Text>
                      <Text as="p" className="h-[17px] ml-[30px] sm:ml-5">
                        X2
                      </Text>
                    </div>
                    <div className="flex flex-row justify-center">
                      <Button color="blue_50" shape="round" className="w-full sm:px-5 font-medium">
                        Pending
                      </Button>
                    </div>
                  </div>
                  <div className="w-[690px] h-px bg-blue-50" />
                  <div className="flex flex-col items-center justify-start w-full pt-[3px] pl-[3px]">
                    <div className="flex flex-row md:flex-col justify-between items-center w-full mt-2 md:gap-10">
                      <div className="flex flex-row sm:flex-col justify-center items-center w-[78%] md:w-full sm:gap-5">
                        <div className="flex flex-row justify-start items-center w-[46%] sm:w-full gap-[9px]">
                          <Img
                            src="images/img_rectangle_4144_48x50.png"
                            alt="image"
                            className="w-[21%] md:h-auto sm:w-full object-cover rounded"
                          />
                          <div className="flex flex-col items-start justify-start w-[76%] gap-[3px]">
                            <Text as="p" className="w-[99%] ml-0.5 md:ml-0">
                              <>
                                Sweet cheezy pizza for kids <br />
                                Meal (smail )
                              </>
                            </Text>
                            <Text size="s" as="p" className="!text-blue-A200 !font-medium">
                              #012365
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[27%] sm:w-full ml-[41px] gap-1 md:ml-5">
                          <Text as="p">Jacob Jones</Text>
                          <Text size="s" as="p" className="!text-blue_gray-400 leading-4">
                            3891 Ranchview Dr. California 62639
                          </Text>
                        </div>
                        <Text as="p" className="ml-7 sm:ml-5">
                          $11.5
                        </Text>
                        <Text as="p" className="h-[17px] ml-[30px] sm:ml-5">
                          X2
                        </Text>
                      </div>
                      <Button color="green_50" shape="round" className="!text-green-400 font-medium min-w-[100px]">
                        Delivered
                      </Button>
                    </div>
                  </div>
                  <div className="w-[690px] h-px bg-blue-50" />
                  <div className="flex flex-row md:flex-col justify-between items-center w-full ml-[3px] md:gap-10">
                    <div className="flex flex-row sm:flex-col justify-center items-center w-[78%] md:w-full sm:gap-5">
                      <div className="flex flex-row justify-start items-center w-[46%] sm:w-full gap-[9px]">
                        <Img
                          src="images/img_rectangle_4144_1.png"
                          alt="image"
                          className="w-[21%] md:h-auto sm:w-full object-cover rounded"
                        />
                        <div className="flex flex-col items-start justify-start w-[76%] gap-[3px]">
                          <Text as="p" className="w-[99%] ml-0.5 md:ml-0">
                            <>
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </>
                          </Text>
                          <Text size="s" as="p" className="!text-blue-A200 !font-medium">
                            #012365
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[27%] sm:w-full ml-[41px] gap-[3px] md:ml-5">
                        <Text as="p">Cody Fisher</Text>
                        <Text size="s" as="p" className="!text-blue_gray-400 leading-4">
                          3891 Ranchview Dr. California 62639
                        </Text>
                      </div>
                      <Text as="p" className="ml-7 sm:ml-5">
                        $42.5
                      </Text>
                      <Text as="p" className="h-[17px] ml-[30px] sm:ml-5">
                        X2
                      </Text>
                    </div>
                    <Button color="blue_50" shape="round" className="sm:px-5 font-medium min-w-[100px]">
                      Pending
                    </Button>
                  </div>
                  <div className="w-[690px] h-px bg-blue-50" />
                  <div className="flex flex-col items-center justify-start w-full pt-[3px] pl-[3px]">
                    <div className="flex flex-row md:flex-col justify-between items-center w-full mt-2 md:gap-10">
                      <div className="flex flex-row sm:flex-col justify-center items-center w-[78%] md:w-full sm:gap-5">
                        <div className="flex flex-row justify-start items-center w-[46%] sm:w-full gap-[9px]">
                          <span className="text-gray-700_01">Mohan Cudhidi</span>
                          <div className="flex flex-col items-start justify-start w-[76%] gap-[3px]">
                            <Text as="p" className="w-[99%] ml-0.5 md:ml-0">
                              <>
                                Sweet cheezy pizza for kids <br />
                                Meal (smail )
                              </>
                            </Text>
                            <Text size="s" as="p" className="!text-blue-A200 !font-medium">
                              #012365
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[27%] sm:w-full ml-[41px] gap-1 md:ml-5">
                          <Text as="p">Esther Howard</Text>
                          <Text size="s" as="p" className="!text-blue_gray-400 leading-4">
                            3891 Ranchview Dr. California 62639
                          </Text>
                        </div>
                        <Text as="p" className="ml-7 sm:ml-5">
                          $92.5
                        </Text>
                        <Text as="p" className="h-[17px] ml-[30px] sm:ml-5">
                          X2
                        </Text>
                      </div>
                      <Button color="green_50" shape="round" className="!text-green-400 font-medium min-w-[100px]">
                        Delivered
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center w-[32%] md:w-full gap-[22px] p-5 bg-white-A700 shadow-md rounded-[15px]">
                <Text size="lg" as="p" className="mt-[5px] !font-medium">
                  Daily Trending Menus
                </Text>
                <div className="flex flex-col w-[97%] mb-2 gap-[11px] md:gap-[2.75px]">
                  <div className="flex flex-row justify-start items-center w-[99%] md:w-full mr-0.5 gap-3.5">
                    <Img
                      src="images/img_rectangle_4144_3.png"
                      alt="image"
                      className="w-[17%] md:h-auto sm:w-full object-cover rounded"
                    />
                    <div className="flex flex-row justify-start w-[79%]">
                      <div className="flex flex-row justify-start items-center w-full gap-px">
                        <div className="flex flex-col items-start justify-start w-[77%] gap-[5px]">
                          <Text as="p" className="leading-4">
                            <>
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </>
                          </Text>
                          <Heading size="s" as="h6">
                            $5.6
                          </Heading>
                        </div>
                        <div className="flex flex-col items-end justify-start h-[55px] w-[54px] gap-[23px]">
                          <Text as="p" className="!text-blue-A200">
                            #1
                          </Text>
                          <Text size="s" as="p" className="!text-blue_gray-400 !font-medium">
                            Order 56x{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[296px] h-px bg-blue-50" />
                  <div className="flex flex-row justify-start items-center w-full gap-3.5">
                    <Img
                      src="images/img_rectangle_4144_4.png"
                      alt="image"
                      className="w-[17%] md:h-auto sm:w-full object-cover rounded"
                    />
                    <div className="flex flex-row justify-start w-[79%]">
                      <div className="flex flex-row justify-start items-center w-full gap-px">
                        <div className="flex flex-col items-start justify-start w-[76%] gap-[5px]">
                          <Text as="p" className="leading-4">
                            <>
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </>
                          </Text>
                          <Heading size="s" as="p">
                            $5.6
                          </Heading>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[25%] gap-[23px]">
                          <Text as="p" className="h-[17px] ml-10 md:ml-0 sm:ml-5 !text-blue-A200">
                            #2
                          </Text>
                          <Text size="s" as="p" className="!text-blue_gray-400 !font-medium">
                            Order 56x{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[296px] h-px bg-blue-50" />
                  <div className="flex flex-row justify-start items-center w-full gap-3.5">
                    <Img
                      src="images/img_rectangle_4144_5.png"
                      alt="image"
                      className="w-[17%] md:h-auto sm:w-full object-cover rounded"
                    />
                    <div className="flex flex-row justify-start w-[79%]">
                      <div className="flex flex-row justify-start items-center w-full gap-px">
                        <div className="flex flex-col items-start justify-start w-[76%] gap-[5px]">
                          <Text as="p" className="leading-4">
                            <>
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </>
                          </Text>
                          <Heading size="s" as="p">
                            $5.6
                          </Heading>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[25%] gap-[23px]">
                          <Text as="p" className="h-[17px] ml-10 md:ml-0 sm:ml-5 !text-blue-A200">
                            #3
                          </Text>
                          <Text size="s" as="p" className="!text-blue_gray-400 !font-medium">
                            Order 56x{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[296px] h-px bg-blue-50" />
                  <div className="flex flex-row justify-start items-center w-full gap-3.5">
                    <Img
                      src="images/img_rectangle_4144_6.png"
                      alt="image"
                      className="w-[17%] md:h-auto sm:w-full object-cover rounded"
                    />
                    <div className="flex flex-row justify-start w-[79%]">
                      <div className="flex flex-row justify-start items-center w-full gap-px">
                        <div className="flex flex-col items-start justify-start w-[76%] gap-[5px]">
                          <Text as="p" className="leading-4">
                            <>
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </>
                          </Text>
                          <Heading size="s" as="p">
                            $5.6
                          </Heading>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[25%] gap-[23px]">
                          <Text as="p" className="h-[17px] ml-10 md:ml-0 sm:ml-5 !text-blue-A200">
                            #4
                          </Text>
                          <Text size="s" as="p" className="!text-blue_gray-400 !font-medium">
                            Order 56x{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
