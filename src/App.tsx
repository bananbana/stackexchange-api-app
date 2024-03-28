import "./index.css";
import { columns } from "./columns";
import { DataTable } from "./components/DataTable";
import { TagsType } from "./types/TagsType";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "./components/ui/button";
import Navigation from "./components/Navigation";

declare var SE: any;

function App() {
  const [data, _setData] = React.useState<TagsType[]>([]);

  React.useEffect(() => {
    SE.init({
      clientId: import.meta.env.VITE_CLIENT_ID,
      key: import.meta.env.VITE_KEY,
      channelUrl: import.meta.env.VITE_CHANNEL_URL,
      complete: function (data: any) {
        console.log(data);
      },
    });
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        _setData(jsonData.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {};
  }, []);

  const authenticate = () => {
    SE.authenticate({
      success: function (data: any) {
        alert(
          "User Authorized with account id = " +
            data.networkUsers[0].account_id +
            ", got access token = " +
            data.accessToken
        );
      },
      error: function (data: any) {
        alert(
          "An error occurred:\n" + data.errorName + "\n" + data.errorMessage
        );
      },
      networkUsers: true,
    });
  };

  return (
    <div className="p-2 w-3/5 mx-auto">
      <button onClick={() => authenticate()}>login</button>
      <Navigation />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
export default App;
