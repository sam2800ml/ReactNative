import { Stack, Tabs } from "expo-router"

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen  name="index" options={{
                headerTitle:"Home",
                title:"Home",
                
            }}/>
            <Tabs.Screen name="users" options={{
                headerShown:false,
                headerTitle:"Usuario",
                title:"User"
            }}/>
            <Tabs.Screen name="Tryme" options={{
                headerTitle:"Tryme",
                title:"Tryme"
            }}/>
        </Tabs>
    )
}
export default TabsLayout