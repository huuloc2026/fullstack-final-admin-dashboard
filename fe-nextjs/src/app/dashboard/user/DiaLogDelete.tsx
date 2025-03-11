import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useAuth } from "@/app/AuthProvider";
import { useRouter } from "next/navigation";

export function DialogDeleteUser({ user }: any) {
  const { token } = useAuth();
  const router = useRouter();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [status, setStatus] = useState(user.status);
  const [role, setRole] = useState(user.role); // Giả sử role mặc định là "User"

  const isAdmin = role === "Admin"; // Kiểm tra xem có phải admin không
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn chặn reload trang

    // Kiểm tra dữ liệu hợp lệ (nếu cần)
    if (!email || !name || !role || !status) {
      toast("Please fill in all fields.");
      return;
    }

    // Tạo object chứa thông tin profile
    const updatedProfile = {
      email,
      name,
      role,
      status,
    };

    const updateUser = await fetch(
      `http://localhost:8386/v1/api/users/${user.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    router.refresh();
    toast("Delete user successfully!");
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="focus:outline-none">
        <Button size="sm" variant="destructive">
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="mt-2">
          <DialogTitle>Delete profile</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete {email} ?
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button variant={"destructive"} type="submit">
                Save changes
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
