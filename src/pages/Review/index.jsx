import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Text, RatingBar, Heading, CheckBox, SelectBox, Input } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { SubMenu, MenuItem, Menu, Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const table1Data = [
  {
    customerone: "Kristin Watson",
    reviewtwo:
      "Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet It uses a dictionary of over 200 Latin words, combined with!",
    totalspent: "4.2",
    update: "Delete",
  },
  {
    customerone: "Kristin Watson",
    reviewtwo:
      "Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet It uses a dictionary of over 200 Latin words, combined with!",
    totalspent: "4.2",
    update: "Delete",
  },
  {
    customerone: "Ralph Edwards",
    reviewtwo:
      "Generators on the Internet tend to repeat predefined necessary, making this the first true generator on the Internet It uses a dictionary of over 200 Latin words, combined with!",
    totalspent: "4.2",
    update: "Delete",
  },
  {
    customerone: "Darrell Steward",
    reviewtwo:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet It uses a dictionary of over 200 Latin words, combined with!",
    totalspent: "4.2",
    update: "Delete",
  },
  {
    customerone: "Jenny Wilson",
    reviewtwo:
      "Repeat predefined chunks as necessary, making this the first true generator on the Internet It uses a dictionary of over 200 Latin words, combined with!",
    totalspent: "4.2",
    update: "Delete",
  },
  {
    customerone: "Robert Fox",
    reviewtwo:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet It uses a dictionary of over 200 Latin words, combined with!",
    totalspent: "4.2",
    update: "Delete",
  },
];

export default function ReviewPage() {
  const [searchBarValue3, setSearchBarValue3] = React.useState("");
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("rowone", {
        cell: (info) => (
          <div className="flex flex-row justify-start sm:w-full">
            <CheckBox shape="round" name="checkbox_one" label="" className="mt-[33px] mb-2" />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-start sm:w-full">
            <CheckBox color="blue_A200" shape="round" name="checkbox" label="" />
          </div>
        ),
        meta: { width: "47px" },
      }),
      table1ColumnHelper.accessor("customerone", {
        cell: (info) => (
          <div className="flex flex-row justify-start items-end gap-[13px]">
            <Img
              src="images/img_rectangle_4126.png"
              alt="image_five"
              className="w-[60px] md:h-auto mb-0.5 object-cover rounded-sm"
            />
            <div className="flex flex-col items-start justify-start w-[57%] mt-[25px] mr-[11px] gap-[9px]">
              <Text as="p">{info?.getValue?.()}</Text>
              <Text size="s" as="p" className="!text-blue-A200 !font-medium">
                #C01256
              </Text>
              <Text size="s" as="p" className="!text-blue_gray-400">
                21 June 2020, 12:42 AM
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="p-px">
            Customer Profile
          </Text>
        ),
        meta: { width: "225px" },
      }),
      table1ColumnHelper.accessor("reviewtwo", {
        cell: (info) => (
          <Text size="s" as="p" className="!text-gray-700_a2 opacity-0.8 leading-[22px]">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="p-px">
            Review
          </Text>
        ),
        meta: { width: "451px" },
      }),
      table1ColumnHelper.accessor("totalspent", {
        cell: (info) => (
          <div className="flex flex-col items-start justify-start gap-2.5">
            <Heading as="h1" className="mt-[18px]">
              {info?.getValue?.()}
            </Heading>
            <RatingBar
              value={4}
              isEditable={true}
              activeColor="#438ffe"
              size={12}
              className="flex justify-between w-[96px]"
            />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="p-px">
            Total Spent
          </Text>
        ),
        meta: { width: "210px" },
      }),
      table1ColumnHelper.accessor("update", {
        cell: (info) => (
          <div className="flex flex-row justify-start items-end h-[115px] gap-[29px]">
            <Text as="p" className="mt-7 !text-blue-A200">
              {info?.getValue?.()}
            </Text>
            <Text as="p" className="!text-green-500">
              Publish
            </Text>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="p-px">
            Update
          </Text>
        ),
        meta: { width: "116px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Brajesh's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-white-A700">
        <div className="flex flex-row md:flex-col justify-center items-start w-full md:gap-5">
          <Sidebar width="252px !important" className="h-screen top-0 bg-white-A700 shadow-sm !sticky overflow-auto">
            <Img
              src="images/img_group_18298.svg"
              alt="image"
              className="h-[30px] mt-6 ml-7 mr-[97px] md:mr-5 sm:mx-5"
            />
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
                <Img
                  src="images/img_arrow_right.svg"
                  alt="arrowright_one"
                  className="h-[24px] w-[24px] cursor-pointer"
                />
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
                label={
                  <div className="flex flex-row justify-start items-center gap-2">
                    <Img src="images/img_frame_18.svg" alt="image_two" className="h-[16px] w-[16px]" />
                    <Text size="lg" as="p">
                      Menus
                    </Text>
                  </div>
                }
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
              <SubMenu
                suffix={<div className="h-[24px] w-[24px] rotate-[90deg]" />}
                label={
                  <div className="flex flex-row justify-start items-center gap-[7px]">
                    <Img src="images/img_vector.svg" alt="vector_one" className="h-[16px] w-[16px]" />
                    <Text size="lg" as="p" className="!text-blue-A200">
                      Customer
                    </Text>
                  </div>
                }
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <MenuItem>Coustomer List</MenuItem>
                  <MenuItem>Review</MenuItem>
                </div>
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
            <div className="flex flex-col items-start justify-start w-[76%] mt-[170px] mb-[5px] mx-auto">
              <Img
                src="images/img_group_18692_3.png"
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
          <div className="flex flex-col items-center justify-start w-[83%] md:w-full gap-9">
            <header className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs">
              <div className="flex flex-row sm:flex-col justify-between items-center w-[99%] sm:gap-10">
                <Input
                  shape="round"
                  name="search"
                  placeholder="Search here"
                  value={searchBarValue3}
                  onChange={(e) => setSearchBarValue3(e)}
                  suffix={
                    searchBarValue3?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue3("")} height={16} width={16} fillColor="#8c8787ff" />
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
            <div className="flex flex-row justify-center w-[94%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full gap-[33px]">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-col items-start justify-start gap-1.5">
                    <Text size="xl" as="p">
                      Review
                    </Text>
                    <Text size="lg" as="p" className="!text-blue_gray-400">
                      Customer / Review
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start w-[21%] gap-[25px]">
                    <SelectBox
                      shape="round"
                      indicator={<Img src="images/img_frame_11_white_a700.svg" alt="Frame 11" />}
                      getOptionLabel={(e) => (
                        <>
                          <div className="flex items-center">
                            <Img src="images/img_mifilter.svg" alt="mi:filter" />
                            <span>{e.label}</span>
                          </div>
                        </>
                      )}
                      name="filter"
                      placeholder="Filter"
                      options={dropDownOptions}
                      className="w-[44%] border-blue-A200 border border-solid"
                    />
                    <SelectBox
                      color="blue_50"
                      variant="outline"
                      shape="round"
                      indicator={<Img src="images/img_frame_11.svg" alt="Frame 11" />}
                      name="newest"
                      placeholder="Newest"
                      options={dropDownOptions}
                      className="w-[46%] gap-px"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-center w-full p-[30px] sm:p-5 bg-white-A700 shadow-md rounded-[15px]">
                  <ReactTable
                    size="xs"
                    bodyProps={{ className: "md:flex-col" }}
                    headerProps={{ className: "md:flex-col md:gap-5" }}
                    rowDataProps={{ className: "md:flex-col md:gap-5" }}
                    className="w-[1049px] mt-1.5 mb-1"
                    columns={table1Columns}
                    data={table1Data}
                  />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                  <Text as="p" className="!font-poppins text-center">
                    Dispalying 10 Out of 250
                  </Text>
                  <div className="flex flex-row justify-start items-center w-[11%] gap-[18px]">
                    <Text as="p" className="text-center">
                      10-250
                    </Text>
                    <div className="flex flex-row justify-start w-[49%]">
                      <div className="flex flex-col items-center justify-start h-[30px] w-[30px] z-[1]">
                        <Button size="xs" className="w-[30px] rounded-tr-[5px] rounded-br-[5px]">
                          <Img src="images/img_arrow_right_white_a700.svg" />
                        </Button>
                      </div>
                      <div className="flex flex-col items-center justify-start h-[30px] w-[30px] ml-[-1px]">
                        <Button color="blue_50" size="xs" className="w-[30px] rounded-tr-[5px] rounded-br-[5px]">
                          <Img src="images/img_arrow_right_blue_a200.svg" />
                        </Button>
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
