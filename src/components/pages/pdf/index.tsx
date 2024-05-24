// import { PDFDownloadLink } from "@react-pdf/renderer";
// import PDFDocument from "./MyDocument/MyDocument";
import { FormButton, FormInput, SiteForm } from "./styles";
import { useFormData } from "./hook";

export const Pdf = () => {
  const { handleSubmit, generatePdfFile, register, errors } = useFormData();
  return (
    <>
      <SiteForm onSubmit={handleSubmit(generatePdfFile)}>
        <FormInput
          data-testid={"input-name"}
          placeholder={"Введите ваше имя"}
          alt={"test"}
          {...register("name", {
            required: "Поле обязательно для заполнения!",
            minLength: {
              value: 5,
              message: "Нужно больше символов",
            },
          })}
        />
        <FormInput
          data-testid={"input-picture"}
          type="file"
          accept="image/*"
          {...register("picture", {
            required: "Загрузите картинку!",
          })}
        />
        {errors && <div>{errors?.name?.message}</div>}
        <FormButton data-testid={"submit-button"} type="submit">
          Сохранить
        </FormButton>
      </SiteForm>
      {/* {formData && (
        <PDFDownloadLink
          document={<PDFDocument name={formData.name} picture={formData.picture} />}
          fileName={`${formData.name}.pdf`}
        >
          {({ loading }) => (loading ? "Загрузка..." : "Скачать")}
        </PDFDownloadLink>
      )} */}
    </>
  );
};

//   const [formData, setFormData] = useState<IFormPDF>();

//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//   } = useForm<IFormPDF>({ mode: "onBlur" });

//   const generatePdfFile = async (data: IFormPDF) => {
//     const pictureDataUrl = await fileToDataURL(data.picture[0]);
//     setFormData({ data, picture: pictureDataUrl });
//   };

//   const fileToDataURL = (file: File) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         resolve(e.target?.result as string);
//       };
//       reader.onerror = (e) => {
//         reject(e.target?.error);
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   return (
//     <>
//       <h1>PDF</h1>
//       <SiteForm onSubmit={handleSubmit(generatePdfFile)}>
//         <FormLabel>
//           Имя:
//           <FormInput
//             data-testid={"input-update"}
//             placeholder={"Введите ваше имя"}
//             alt={"test"}
//             {...register("name", {
//               required: "Поле обязательно для заполнения!",
//               minLength: {
//                 value: 5,
//                 message: "Нужно больше символов",
//               },
//             })}
//           />
//         </FormLabel>
//         <input
//           type="file"
//           accept="image/*"
//           {...register("picture", {
//             required: "Загрузите картинку!",
//           })}
//         />
//         {errors && <div>{errors?.name?.message}</div>}
//         <FormButton type="submit">Сохранить</FormButton>
//       </SiteForm>
//       {formData && (
//         <PDFDownloadLink
//           document={<PDFDocument name={formData.name} picture={formData.picture} />}
//           fileName={`${formData.name}.pdf`}
//         >
//           {({ loading }) => (loading ? "Загрузка..." : "Скачать")}
//         </PDFDownloadLink>
//       )}
//     </>
//   );
// };
