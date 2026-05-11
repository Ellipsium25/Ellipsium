import { getCurrent } from "@/features/auth/queries";
import { CreateWorkspaceForm } from "@/features/workspaces/components/create-workspace-form"
import { redirect } from "next/navigation";

const WorkspaceCreatePage = async () => {
    const user = await getCurrent();
    if(!user) redirect("/sign-in")

    return (
        <div className="flex flex-col h-screen items-center bg-neutral-100">
        <div className="w-full lg:max-w-xl">
            <CreateWorkspaceForm/>
        </div>
        </div>
    )
}

export default WorkspaceCreatePage