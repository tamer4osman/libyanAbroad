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
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    personalPhotoUrl: "/placeholder.svg?height=100&width=100",
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
    personalPhotoUrl: "/placeholder.svg?height=100&width=100",
  },
];

export default function CitizensPage() {
  const { t } = useTranslation();
  const [citizens, setCitizens] = useState(mockCitizens);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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
      personalPhotoUrl: imagePreview || "/placeholder.svg?height=100&width=100",
    };
    setCitizens([...citizens, newCitizen]);
    setIsAddDialogOpen(false);
    setImagePreview(null);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
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
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>{t("addNewCitizen")}</DialogTitle>
              </DialogHeader>
              <ScrollArea className="max-h-[80vh]">
                <form onSubmit={handleAddCitizen} className="space-y-4 p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Registry Information */}
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
                      <Label htmlFor="registryOffice">
                        {t("registryOffice")}
                      </Label>
                      <Input
                        id="registryOffice"
                        name="registryOffice"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registryCity">{t("registryCity")}</Label>
                      <Input id="registryCity" name="registryCity" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pageNumber">{t("pageNumber")}</Label>
                      <Input id="pageNumber" name="pageNumber" type="number" />
                    </div>

                    {/* Personal Information */}
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
                      <Label htmlFor="grandFatherNameArabic">
                        {t("grandFatherNameArabic")}
                      </Label>
                      <Input
                        id="grandFatherNameArabic"
                        name="grandFatherNameArabic"
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
                      <Label htmlFor="firstNameEnglish">
                        {t("firstNameEnglish")}
                      </Label>
                      <Input id="firstNameEnglish" name="firstNameEnglish" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fatherNameEnglish">
                        {t("fatherNameEnglish")}
                      </Label>
                      <Input id="fatherNameEnglish" name="fatherNameEnglish" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="grandFatherNameEnglish">
                        {t("grandFatherNameEnglish")}
                      </Label>
                      <Input
                        id="grandFatherNameEnglish"
                        name="grandFatherNameEnglish"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="familyNameEnglish">
                        {t("familyNameEnglish")}
                      </Label>
                      <Input id="familyNameEnglish" name="familyNameEnglish" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nationalNumber">
                        {t("nationalNumber")}
                      </Label>
                      <Input
                        id="nationalNumber"
                        name="nationalNumber"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="personalPhoto">
                        {t("personalPhoto")}
                      </Label>
                      <Input
                        id="personalPhoto"
                        name="personalPhoto"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                      {imagePreview && (
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="mt-2 w-32 h-32 object-cover"
                        />
                      )}
                    </div>

                    {/* Birth Information */}
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
                      <Label htmlFor="placeOfBirthType">
                        {t("placeOfBirthType")}
                      </Label>
                      <Select name="placeOfBirthType">
                        <SelectTrigger>
                          <SelectValue
                            placeholder={t("selectPlaceOfBirthType")}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="HOSPITAL">
                            {t("hospital")}
                          </SelectItem>
                          <SelectItem value="HOME">{t("home")}</SelectItem>
                          <SelectItem value="OTHER">{t("other")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="placeOfBirth">{t("placeOfBirth")}</Label>
                      <Input id="placeOfBirth" name="placeOfBirth" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birthCity">{t("birthCity")}</Label>
                      <Input id="birthCity" name="birthCity" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="countryOfBirth">
                        {t("countryOfBirth")}
                      </Label>
                      <Input
                        id="countryOfBirth"
                        name="countryOfBirth"
                        defaultValue="Libya"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registrationNumber">
                        {t("registrationNumber")}
                      </Label>
                      <Input
                        id="registrationNumber"
                        name="registrationNumber"
                      />
                    </div>

                    {/* Father Information */}
                    <div className="space-y-2">
                      <Label htmlFor="fatherFirstNameArabic">
                        {t("fatherFirstNameArabic")}
                      </Label>
                      <Input
                        id="fatherFirstNameArabic"
                        name="fatherFirstNameArabic"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fatherFatherNameArabic">
                        {t("fatherFatherNameArabic")}
                      </Label>
                      <Input
                        id="fatherFatherNameArabic"
                        name="fatherFatherNameArabic"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fatherGrandFatherNameArabic">
                        {t("fatherGrandFatherNameArabic")}
                      </Label>
                      <Input
                        id="fatherGrandFatherNameArabic"
                        name="fatherGrandFatherNameArabic"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fatherFamilyNameArabic">
                        {t("fatherFamilyNameArabic")}
                      </Label>
                      <Input
                        id="fatherFamilyNameArabic"
                        name="fatherFamilyNameArabic"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fatherFirstNameEnglish">
                        {t("fatherFirstNameEnglish")}
                      </Label>
                      <Input
                        id="fatherFirstNameEnglish"
                        name="fatherFirstNameEnglish"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fatherFatherNameEnglish">
                        {t("fatherFatherNameEnglish")}
                      </Label>
                      <Input
                        id="fatherFatherNameEnglish"
                        name="fatherFatherNameEnglish"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fatherGrandFatherNameEnglish">
                        {t("fatherGrandFatherNameEnglish")}
                      </Label>
                      <Input
                        id="fatherGrandFatherNameEnglish"
                        name="fatherGrandFatherNameEnglish"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fatherFamilyNameEnglish">
                        {t("fatherFamilyNameEnglish")}
                      </Label>
                      <Input
                        id="fatherFamilyNameEnglish"
                        name="fatherFamilyNameEnglish"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fatherNationalNumber">
                        {t("fatherNationalNumber")}
                      </Label>
                      <Input
                        id="fatherNationalNumber"
                        name="fatherNationalNumber"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fatherNationality">
                        {t("fatherNationality")}
                      </Label>
                      <Input
                        id="fatherNationality"
                        name="fatherNationality"
                        defaultValue="Libyan"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fatherProfession">
                        {t("fatherProfession")}
                      </Label>
                      <Input id="fatherProfession" name="fatherProfession" />
                    </div>

                    {/* Mother Information */}
                    <div className="space-y-2">
                      <Label htmlFor="motherFirstNameArabic">
                        {t("motherFirstNameArabic")}
                      </Label>
                      <Input
                        id="motherFirstNameArabic"
                        name="motherFirstNameArabic"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motherFatherNameArabic">
                        {t("motherFatherNameArabic")}
                      </Label>
                      <Input
                        id="motherFatherNameArabic"
                        name="motherFatherNameArabic"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motherGrandFatherNameArabic">
                        {t("motherGrandFatherNameArabic")}
                      </Label>
                      <Input
                        id="motherGrandFatherNameArabic"
                        name="motherGrandFatherNameArabic"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motherFamilyNameArabic">
                        {t("motherFamilyNameArabic")}
                      </Label>
                      <Input
                        id="motherFamilyNameArabic"
                        name="motherFamilyNameArabic"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motherFirstNameEnglish">
                        {t("motherFirstNameEnglish")}
                      </Label>
                      <Input
                        id="motherFirstNameEnglish"
                        name="motherFirstNameEnglish"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motherFatherNameEnglish">
                        {t("motherFatherNameEnglish")}
                      </Label>
                      <Input
                        id="motherFatherNameEnglish"
                        name="motherFatherNameEnglish"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motherGrandFatherNameEnglish">
                        {t("motherGrandFatherNameEnglish")}
                      </Label>
                      <Input
                        id="motherGrandFatherNameEnglish"
                        name="motherGrandFatherNameEnglish"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motherFamilyNameEnglish">
                        {t("motherFamilyNameEnglish")}
                      </Label>
                      <Input
                        id="motherFamilyNameEnglish"
                        name="motherFamilyNameEnglish"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motherNationalNumber">
                        {t("motherNationalNumber")}
                      </Label>
                      <Input
                        id="motherNationalNumber"
                        name="motherNationalNumber"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motherNationality">
                        {t("motherNationality")}
                      </Label>
                      <Input
                        id="motherNationality"
                        name="motherNationality"
                        defaultValue="Libyan"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motherProfession">
                        {t("motherProfession")}
                      </Label>
                      <Input id="motherProfession" name="motherProfession" />
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-2">
                      <Label htmlFor="nationality">{t("nationality")}</Label>
                      <Input
                        id="nationality"
                        name="nationality"
                        defaultValue="Libyan"
                      />
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
                    <div className="space-y-2">
                      <Label htmlFor="religion">{t("religion")}</Label>
                      <Input
                        id="religion"
                        name="religion"
                        defaultValue="Muslim"
                      />
                    </div>

                    {/* Administrative Information */}
                    <div className="space-y-2">
                      <Label htmlFor="certificateNumber">
                        {t("certificateNumber")}
                      </Label>
                      <Input id="certificateNumber" name="certificateNumber" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="certificateDate">
                        {t("certificateDate")}
                      </Label>
                      <Input
                        id="certificateDate"
                        name="certificateDate"
                        type="date"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="placeOfIssue">{t("placeOfIssue")}</Label>
                      <Input id="placeOfIssue" name="placeOfIssue" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dateOfIssue">{t("dateOfIssue")}</Label>
                      <Input id="dateOfIssue" name="dateOfIssue" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registrarName">
                        {t("registrarName")}
                      </Label>
                      <Input id="registrarName" name="registrarName" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="documentType">{t("documentType")}</Label>
                      <Input
                        id="documentType"
                        name="documentType"
                        defaultValue="Birth Certificate"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">{t("notes")}</Label>
                    <Textarea id="notes" name="notes" />
                  </div>
                  <Button type="submit">{t("addCitizen")}</Button>
                </form>
              </ScrollArea>
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
              <TableHead>{t("photo")}</TableHead>
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
                <TableCell>
                  <img
                    src={citizen.personalPhotoUrl}
                    alt={`${citizen.firstNameArabic} ${citizen.familyNameArabic}`}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </MainLayout>
  );
}
