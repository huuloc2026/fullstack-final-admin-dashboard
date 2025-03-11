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
import { UpdateProductApi } from "@/utils/clientRequest";
export function DialogEditProd({ product }: any) {
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
      const updateInforProduct = {
        name,
        description,
        price,
        stock,
        status,
        createdAt,
        updatedAt,
      };
      await UpdateProductApi(product.id, token, updateInforProduct);

      toast("Profile updated successfully!");
      router.refresh();
    } catch (error) {
      console.error("Update failed:", error);
      toast("Failed to update profile.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="focus:outline-none">
        <Button size="sm" variant="ghost">
          Edit Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogDescription>
            Update your products information
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Product Name
          </Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="description" className="text-right">
            Description
          </Label>
          <Input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="price" className="text-right">
            Price
          </Label>
          <Input
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="stock" className="text-right">
            Stock
          </Label>
          <Input
            id="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="col-span-3"
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="createAt" className="text-right">
            createAt
          </Label>
          <Input
            disabled
            id="createAt"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="updatedAt" className="text-right">
            updatedAt
          </Label>
          <Input
            disabled
            id="updatedAt"
            value={updatedAt}
            onChange={(e) => setUpdatedAt(e.target.value)}
            className="col-span-3"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
