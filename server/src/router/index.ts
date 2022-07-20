import { Router } from "express";
import { getAllCompany } from "../controllers/post/posts";
import { addCompanyUserApplicant } from "../controllers/post/post-add";
import { deleteCompany } from "../controllers/post/post-delete";
import { companyDetail } from "../controllers/post/post-detail";
import { companyModify } from "../controllers/post/post-modify";
import { companySearch } from "../controllers/post/post-search";
import { userApply } from "../controllers/user/user-apply";

const router = Router();

router.post("/posts", addCompanyUserApplicant);
router.get("/posts", getAllCompany);
router.delete("/posts/:id", deleteCompany);
router.get("/posts/detail/:id", companyDetail);
router.put("/posts/:id",companyModify);
router.get("/search?", companySearch);
router.post("/user/:id/company/:employerid", userApply);

export default router;