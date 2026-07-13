"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function DeleteModal({ book }) {

    const router=useRouter()

  const {
    _id,
    roomName,
  } = book || {};

  const handleDelete = async () => {

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/addBook/${_id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      console.log(data);

      if (res.ok) {
      toast('Delete Room')
        router.push('/explore')
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AlertDialog>

      <Button variant="danger">
        Delete
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">

            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>
                Delete room permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This will permanently delete{" "}
                <strong>{roomName}</strong>.
                This action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>

              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              <Button
                onClick={handleDelete}
                slot="close"
                variant="danger"
              >
                Delete
              </Button>

            </AlertDialog.Footer>

          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}