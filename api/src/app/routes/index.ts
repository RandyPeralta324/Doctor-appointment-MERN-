import express from 'express';
import { DiseaseRouter } from '../modules/disease/disease.route';
import { AdminRouter } from '../modules/admin/admin.route';
import { DepartmentRoutes } from '../modules/madical-department/department.route';
import { DoctorRouter } from '../modules/doctor/admin.route';
import { DoctorTimeSlotRouter } from '../modules/doctor-time-slot/doctorTimeSlot.route';
import { PatientRouter } from '../modules/patient/patient.route';

const router = express.Router();

const moduleRoutes = [
    {
        path: '/disease',
        route: DiseaseRouter,
    },
    {
        path: '/department',
        route: DepartmentRoutes
    },
    {
        path: '/admin',
        route: AdminRouter,
    },
    {
        path: '/doctor',
        route: DoctorRouter,
    },
    {
        path: '/time-slot',
        route: DoctorTimeSlotRouter,
    },
    {
        path: '/patient',
        route: PatientRouter,
    }
]
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;