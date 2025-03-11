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
import { DeleteProductApi } from "@/utils/clientRequest";

export function DialogDeleteProduct({ product }: any) {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);
  const [status, setStatus] = useState(product.status);
  const [createdAt, setCreatedAt] = useState(product.createdAt);
  const [updatedAt, setUpdatedAt] = useState(product.updatedAt);
  const router = useRouter();
  const { token } = useAuth();
  if (!token) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await DeleteProductApi(product.id, token);
      toast.success("Deleted Product successfully!");
      router.refresh();
    } catch (error) {
      console.error("Update failed:", error);
      toast("Failed to update profile.");
    }
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
          <DialogTitle>Delete Product</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this "{product.name}" ?
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
