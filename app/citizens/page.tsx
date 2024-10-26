"use client";

import { useState } from "react";
import { MainLayout } from "@/components/MainLayout";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for demonstration
const mockCitizens = [
  {
    id: 1,
    civilRegistryId: "123456",
    firstNameArabic: "محمد",
    fatherNameArabic: "علي",
    familyNameArabic: "الليبي",
    nationalNumber: "1234567890",
    dateOfBirth: "1990-01-01",
    birthCity: "طرابلس",
  },
  {
    id: 2,
    civilRegistryId: "789012",
    firstNameArabic: "فاطمة",
    fatherNameArabic: "أحمد",
    familyNameArabic: "العربي",
    nationalNumber: "0987654321",
    dateOfBirth: "1995-05-15",
    birthCity: "بنغازي",
  },
];

export default function CitizensPage() {
  const { t } = useTranslation();
  const [citizens, setCitizens] = useState(mockCitizens);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const handleAddCitizen = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newCitizen = {
      id: citizens.length + 1,
      civilRegistryId: formData.get("civilRegistryId") as string,
      firstNameArabic: formData.get("firstNameArabic") as string,
      fatherNameArabic: formData.get("fatherNameArabic") as string,
      familyNameArabic: formData.get("familyNameArabic") as string,
      nationalNumber: formData.get("nationalNumber") as string,
      dateOfBirth: formData.get("dateOfBirth") as string,
      birthCity: formData.get("birthCity") as string,
    };
    setCitizens([...citizens, newCitizen]);
    setIsAddDialogOpen(false);
  };

  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {t("citizens")}
          </h1>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>{t("addCitizen")}</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{t("addNewCitizen")}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddCitizen} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="civilRegistryId">
                      {t("civilRegistryId")}
                    </Label>
                    <Input
                      id="civilRegistryId"
                      name="civilRegistryId"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nationalNumber">
                      {t("nationalNumber")}
                    </Label>
                    <Input id="nationalNumber" name="nationalNumber" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="firstNameArabic">
                      {t("firstNameArabic")}
                    </Label>
                    <Input
                      id="firstNameArabic"
                      name="firstNameArabic"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fatherNameArabic">
                      {t("fatherNameArabic")}
                    </Label>
                    <Input
                      id="fatherNameArabic"
                      name="fatherNameArabic"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="familyNameArabic">
                      {t("familyNameArabic")}
                    </Label>
                    <Input
                      id="familyNameArabic"
                      name="familyNameArabic"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">{t("dateOfBirth")}</Label>
                    <Input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthCity">{t("birthCity")}</Label>
                    <Input id="birthCity" name="birthCity" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bloodType">{t("bloodType")}</Label>
                    <Select name="bloodType">
                      <SelectTrigger>
                        <SelectValue placeholder={t("selectBloodType")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A_POSITIVE">A+</SelectItem>
                        <SelectItem value="A_NEGATIVE">A-</SelectItem>
                        <SelectItem value="B_POSITIVE">B+</SelectItem>
                        <SelectItem value="B_NEGATIVE">B-</SelectItem>
                        <SelectItem value="O_POSITIVE">O+</SelectItem>
                        <SelectItem value="O_NEGATIVE">O-</SelectItem>
                        <SelectItem value="AB_POSITIVE">AB+</SelectItem>
                        <SelectItem value="AB_NEGATIVE">AB-</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button type="submit">{t("addCitizen")}</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("civilRegistryId")}</TableHead>
              <TableHead>{t("name")}</TableHead>
              <TableHead>{t("nationalNumber")}</TableHead>
              <TableHead>{t("dateOfBirth")}</TableHead>
              <TableHead>{t("birthCity")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {citizens.map((citizen) => (
              <TableRow key={citizen.id}>
                <TableCell>{citizen.civilRegistryId}</TableCell>
                <TableCell>{`${citizen.firstNameArabic} ${citizen.fatherNameArabic} ${citizen.familyNameArabic}`}</TableCell>
                <TableCell>{citizen.nationalNumber}</TableCell>
                <TableCell>{citizen.dateOfBirth}</TableCell>
                <TableCell>{citizen.birthCity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </MainLayout>
  );
}
