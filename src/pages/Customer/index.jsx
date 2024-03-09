import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Text, SelectBox, Input } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { SubMenu, MenuItem, Menu, Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const tableData = [
  {
    orderid: "#01236556",
    date: "21 June 2020, 12:42 AM",
    customertwo: "Kathryn Murphy",
    location: "35 Station Road London",
    totalspent: "$83.46",
    lastorder: "$12.3",
  },
  {
    orderid: "#01236556",
    date: "21 June 2020, 12:42 AM",
    customertwo: "Kathryn Murphy",
    location: "35 Station Road London",
    totalspent: "$83.46",
    lastorder: "$12.3",
  },
  {
    orderid: "#01236556",
    date: "24 June 2020, 12:42 AM",
    customertwo: "Kristin Watson",
    location: "35 Station Road London",
    totalspent: "$82.46",
    lastorder: "$45.36",
  },
  {
    orderid: "#01236556",
    date: "21 June 2020, 12:42 AM",
    customertwo: "Darrell Steward",
    location: "35 Station Road London",
    totalspent: "$87.46",
    lastorder: "$8.36",
  },
  {
    orderid: "#01236556",
    date: "24 June 2020, 12:42 AM",
    customertwo: "Jenny Wilson",
    location: "35 Station Road London",
    totalspent: "$82.46",
    lastorder: "$71.56",
  },
  {
    orderid: "#01236556",
    date: "24 June 2020, 12:42 AM",
    customertwo: "Courtney Henry",
    location: "35 Station Road London",
    totalspent: "$90.46",
    lastorder: "$12.59",
  },
  {
    orderid: "#01236556",
    date: "21 June 2020, 12:42 AM",
    customertwo: "Annette Black",
    location: "35 Station Road London",
    totalspent: "$12.46",
    lastorder: "$78.12\n\n",
  },
  {
    orderid: "#01236556",
    date: "21 June 2020, 12:42 AM",
    customertwo: "Eleanor Pena",
    location: "35 Station Road London",
    totalspent: "$92.46",
    lastorder: "$78.32\n\n",
  },
  {
    orderid: "#01236556",
    date: "23 June 2020, 12:42 AM",
    customertwo: "Wade Warren",
    location: "35 Station Road London",
    totalspent: "$32.46",
    lastorder: "$78.6",
  },
  {
    orderid: "#01236556",
    date: "21 June 2020, 12:42 AM",
    customertwo: "Brooklyn Simmons",
    location: "35 Station Road London",
    totalspent: "$82.46",
    lastorder: "$78.52",
  },
  {
    orderid: "#01236556",
    date: "21 June 2020, 12:42 AM",
    customertwo: "Brooklyn Simmons",
    location: "35 Station Road London",
    totalspent: "$82.46",
    lastorder: "$78.52",
  },
  {
    orderid: "#01236556",
    date: "21 June 2020, 12:42 AM",
    customertwo: "Brooklyn Simmons",
    location: "35 Station Road London",
    totalspent: "$82.46",
    lastorder: "$78.52",
  },
];

export default function CustomerPage() {
  const [searchBarValue2, setSearchBarValue2] = React.useState("");
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("orderid", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Order ID{" "}
          </Text>
        ),
        meta: { width: "110px" },
      }),
      tableColumnHelper.accessor("date", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Date
          </Text>
        ),
        meta: { width: "210px" },
      }),
      tableColumnHelper.accessor("customertwo", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Customer
          </Text>
        ),
        meta: { width: "170px" },
      }),
      tableColumnHelper.accessor("location", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Location
          </Text>
        ),
        meta: { width: "237px" },
      }),
      tableColumnHelper.accessor("totalspent", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Total Spent
          </Text>
        ),
        meta: { width: "141px" },
      }),
      tableColumnHelper.accessor("lastorder", {
        cell: (info) => (
          <div className="flex flex-row justify-between items-end">
            <Text as="p" className="mb-px">
              {info?.getValue?.()}
            </Text>
            <Img src="images/img_frame_13.svg" alt="image_five" className="h-[20px] w-[20px] mt-1.5" />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="p-px">
            Last Order
          </Text>
        ),
        meta: { width: "194px" },
      }),
    ];
  }, []);

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
          <div className="flex flex-col items-start justify-start w-[76%] mt-[170px] mb-[84px] mx-auto">
            <Img
              src="images/img_group_18692_2.png"
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
                value={searchBarValue2}
                onChange={(e) => setSearchBarValue2(e)}
                suffix={
                  searchBarValue2?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue2("")} height={16} width={16} fillColor="#8c8787ff" />
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
              <div className="flex flex-col items-start justify-start gap-1.5">
                <Text size="xl" as="p">
                  Customer
                </Text>
                <Text size="lg" as="p" className="!text-blue_gray-400">
                  Customer / Reviwe
                </Text>
              </div>
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
                className="w-[10%] border-blue-A200 border border-solid"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-2">
              <div className="flex flex-row justify-center w-full p-[23px] sm:p-5 bg-white-A700 shadow-md rounded-[15px]">
                <ReactTable
                  size="md"
                  bodyProps={{ className: "md:flex-col" }}
                  headerProps={{ className: "md:flex-col md:gap-5" }}
                  rowDataProps={{ className: "md:flex-col md:gap-5" }}
                  className="w-[1062px] mb-[17px]"
                  columns={tableColumns}
                  data={tableData}
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
    </>
  );
}
