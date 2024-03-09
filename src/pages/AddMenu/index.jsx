import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, SelectBox, Img, Text, Input } from "../../components";
import { SubMenu, MenuItem, Menu, Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AddMenuPage() {
  const [searchBarValue6, setSearchBarValue6] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Brajesh's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row md:flex-col justify-center items-start w-full md:gap-5 bg-white-A700">
        <Sidebar width="252px !important" className="h-screen top-0 bg-white-A700 shadow-sm !sticky overflow-auto">
          <Img src="images/img_group_18298.svg" alt="image" className="h-[30px] mt-6 ml-7 mr-[97px] md:mr-5 sm:mx-5" />
          <Menu
            menuItemStyles={{
              button: {
                padding: "7px 7px 7px 30px",
                color: "#8c8787",
                fontWeight: 400,
                fontSize: "16px",
                gap: "8px",
              },
            }}
            renderExpandIcon={() => (
              <Img src="images/img_arrow_right.svg" alt="arrowright_one" className="h-[24px] w-[24px] cursor-pointer" />
            )}
            className="flex flex-col items-center justify-start w-full mt-[76px]"
          >
            <MenuItem
              icon={
                <Img src="images/img_circlesfour_blue_gray_400.svg" alt="image_one" className="h-[20px] w-[20px]" />
              }
            >
              Dashboard
            </MenuItem>
            <SubMenu
              label={
                <div className="flex flex-row justify-start items-center gap-2">
                  <Img src="images/img_frame_17.svg" alt="rocketlaunch" className="h-[16px] w-[16px]" />
                  <Text size="lg" as="p">
                    Orders
                  </Text>
                </div>
              }
            >
              <MenuItem>Submenu Item</MenuItem>
            </SubMenu>
            <SubMenu
              suffix={<div className="h-[24px] w-[24px] rotate-[90deg]" />}
              label={
                <div className="flex flex-row justify-start items-center gap-2">
                  <Img src="images/img_group_2.svg" alt="image_two" className="h-[16px] w-[16px]" />
                  <Text size="lg" as="p" className="!text-blue-A200">
                    Menus
                  </Text>
                </div>
              }
            >
              <div className="flex flex-col items-center justify-start w-full">
                <MenuItem>Add Menu</MenuItem>
                <MenuItem>Menu List</MenuItem>
                <MenuItem>Categories</MenuItem>
              </div>
            </SubMenu>
            <SubMenu
              label={
                <div className="flex flex-row justify-start items-center gap-2">
                  <Img src="images/img_frame_19.svg" alt="vector_one" className="h-[16px] w-[16px]" />
                  <Text size="lg" as="p">
                    Customer
                  </Text>
                </div>
              }
            >
              <MenuItem>Submenu Item</MenuItem>
            </SubMenu>
            <MenuItem icon={<Img src="images/img_frame_20.svg" alt="vector_three" className="h-[16px] w-[16px]" />}>
              Analytics
            </MenuItem>
            <SubMenu
              label={
                <div className="flex flex-row justify-start items-center gap-2">
                  <Img src="images/img_frame_21.svg" alt="image_three" className="h-[16px] w-[16px]" />
                  <Text size="lg" as="p">
                    Table{" "}
                  </Text>
                </div>
              }
            >
              <MenuItem>Submenu Item</MenuItem>
            </SubMenu>
          </Menu>
          <div className="flex flex-col items-start justify-start w-[76%] mt-[146px] mb-[5px] mx-auto">
            <Img
              src="images/img_group_18692_5.png"
              alt="image_four"
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
        <div className="flex flex-col items-center justify-start w-[83%] md:w-full gap-[35px]">
          <header className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs">
            <div className="flex flex-row sm:flex-col justify-between items-center w-[99%] sm:gap-10">
              <Input
                shape="round"
                name="search"
                placeholder="Search here"
                value={searchBarValue6}
                onChange={(e) => setSearchBarValue6(e)}
                suffix={
                  searchBarValue6?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue6("")} height={16} width={16} fillColor="#8c8787ff" />
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
          <div className="flex flex-col items-center justify-start w-[94%] md:w-full gap-[35px]">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-col items-start justify-start gap-[7px]">
                <Text size="xl" as="p">
                  Add Menu
                </Text>
                <Text size="lg" as="p" className="!text-blue_gray-400">
                  Add Menu / Menu List / Categories
                </Text>
              </div>
              <SelectBox
                shape="round"
                indicator={<Img src="images/img_frame_11_white_a700.svg" alt="Frame 11" />}
                name="today"
                placeholder="Today"
                options={dropDownOptions}
                className="w-[9%] gap-px border-blue-A200 border border-solid"
              />
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-[26px] p-5 bg-white-A700 shadow-md rounded-[15px]">
              <Text size="lg" as="p" className="mt-1.5 !font-medium">
                Choose Better Menu Type
              </Text>
              <div className="flex flex-col items-start justify-start w-full mb-1 gap-[25px]">
                <div className="flex flex-row justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full gap-[18px]">
                    <div className="flex flex-row md:flex-col justify-start w-full gap-[30px] md:gap-5">
                      <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-2">
                        <Text size="lg" as="p">
                          Food Name
                        </Text>
                        <Input
                          color="gray_50_01"
                          size="sm"
                          type="text"
                          name="name"
                          placeholder="Enter Name "
                          className="w-full sm:w-full border-gray-200 rounded-[5px]"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-2">
                        <Text size="lg" as="p">
                          Food Price
                        </Text>
                        <Input
                          color="gray_50_01"
                          size="sm"
                          name="price"
                          placeholder="Enter Price"
                          className="w-full sm:w-full border-gray-200 rounded-[5px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-col justify-start items-start w-full gap-[30px] md:gap-5">
                      <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-1.5">
                        <Text size="lg" as="p">
                          Upload
                        </Text>
                        <div className="flex flex-row justify-start w-full">
                          <div className="flex flex-row justify-center w-full p-[37px] sm:p-5 border-gray-200 border border-dashed bg-gray-50_01 rounded-[5px]">
                            <div className="flex flex-col items-center justify-start w-[46%] gap-2.5 mx-[120px] md:mx-5">
                              <Img src="images/img_frame_15.svg" alt="image_five" className="h-[32px] w-[32px]" />
                              <Text as="p" className="!text-blue_gray-400 !font-normal">
                                <span className="text-gray-700_01 font-medium">Drop your imges here</span>
                                <span className="text-gray-700_01 font-medium">,</span>
                                <span className="text-blue_gray-400"></span>
                                <span className="text-blue-A200">or browes</span>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-1.5">
                        <Text size="lg" as="p" className="!text-blue_gray-400">
                          Categories
                        </Text>
                        <SelectBox
                          color="gray_50_01"
                          size="sm"
                          indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" />}
                          name="select"
                          placeholder="Select"
                          options={dropDownOptions}
                          className="w-full gap-px border-gray-200 border border-solid rounded-[5px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start gap-[21px]">
                  <Button size="md" shape="round" className="sm:px-5 font-medium min-w-[112px]">
                    Submit
                  </Button>
                  <Button size="md" variant="outline" shape="round" className="sm:px-5 font-medium min-w-[112px]">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
