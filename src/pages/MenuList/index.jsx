import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Text, RatingBar, SelectBox, Input } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { SubMenu, MenuItem, Menu, Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const table2Data = [
  {
    productid: "#465692316",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "In Stock",
    price: "$56.12",
  },
  {
    productid: "#465692313",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "In Stock",
    price: "$56.12",
  },
  {
    productid: "#465692318",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "Out In Stock",
    price: "$56.12",
  },
  {
    productid: "#465692312",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "In Stock",
    price: "$56.12",
  },
  {
    productid: "#465692789",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "Out In Stock",
    price: "$56.12",
  },
  { productid: "#46569233", productname: "Sweet cheezy pizza ", quantity: "6957X", satus: "In Stock", price: "$56.12" },
  {
    productid: "#465692378",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "Out In Stock",
    price: "$56.12",
  },
  {
    productid: "#465692316",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "Out In Stock",
    price: "$56.12",
  },
  {
    productid: "#465692336",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "In Stock",
    price: "$56.12",
  },
  {
    productid: "#465692316",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "In Stock",
    price: "$56.12",
  },
];

export default function MenuListPage() {
  const [searchBarValue7, setSearchBarValue7] = React.useState("");
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("productid", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Product ID
          </Text>
        ),
        meta: { width: "153px" },
      }),
      table2ColumnHelper.accessor("productname", {
        cell: (info) => (
          <div className="flex flex-row justify-start">
            <div className="flex flex-row justify-start items-center w-[54%] mt-2.5 gap-4">
              <Img
                src="images/img_rectangle_4144_9.png"
                alt="image_five"
                className="w-[40px] md:h-auto object-cover rounded"
              />
              <div className="flex flex-col items-start justify-start w-[73%] gap-[5px]">
                <Text as="p">{info?.getValue?.()}</Text>
                <div className="flex flex-row justify-start items-center gap-2.5">
                  <RatingBar
                    value={4}
                    isEditable={true}
                    activeColor="#438ffe"
                    size={10}
                    className="flex justify-between w-[66px]"
                  />
                  <Text size="s" as="p" className="!text-blue_gray-400 !font-medium">
                    (Review 4.5 )
                  </Text>
                </div>
              </div>
            </div>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pl-[7px] py-px">
            Product Name
          </Text>
        ),
        meta: { width: "381px" },
      }),
      table2ColumnHelper.accessor("quantity", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Quantity
          </Text>
        ),
        meta: { width: "233px" },
      }),
      table2ColumnHelper.accessor("satus", {
        cell: (info) => (
          <Text as="p" className="!text-green-500">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="p-px">
            Satus
          </Text>
        ),
        meta: { width: "225px" },
      }),
      table2ColumnHelper.accessor("price", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Price
          </Text>
        ),
        meta: { width: "44px" },
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
            <div className="flex flex-col items-start justify-start w-[76%] mt-[146px] mb-[84px] mx-auto">
              <Img
                src="images/img_group_18692_6.png"
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
                  value={searchBarValue7}
                  onChange={(e) => setSearchBarValue7(e)}
                  suffix={
                    searchBarValue7?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue7("")} height={16} width={16} fillColor="#8c8787ff" />
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
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-col items-start justify-start gap-1.5">
                    <Text size="xl" as="p">
                      Menu List
                    </Text>
                    <Text size="lg" as="p" className="!text-blue_gray-400">
                      Menu / Menu List
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
                <div className="flex flex-row justify-center w-full mt-9 p-[26px] sm:p-5 bg-white-A700 shadow-md rounded-[15px]">
                  <ReactTable
                    size="sm"
                    bodyProps={{ className: "md:flex-col" }}
                    headerProps={{ className: "md:flex-col md:gap-5" }}
                    rowDataProps={{ className: "md:flex-col md:gap-5" }}
                    className="w-[1036px] mx-[11px]"
                    columns={table2Columns}
                    data={table2Data}
                  />
                </div>
                <div className="flex flex-row justify-between items-center w-full mt-[15px]">
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
