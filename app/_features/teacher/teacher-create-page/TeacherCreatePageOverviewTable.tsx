import { getDateAsDDMMYYYYHHMMSS } from "@/app/_utils/getDateAsDDMMYYYYHHMMSS";
import { TeacherType } from "@/app/_utils/types/teacher";
import {
  Check,
  CheckCircle,
  CheckOutlined,
  Warning,
} from "@mui/icons-material";
import {
  Chip,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

type TeacherCreatePageOverviewTableProps = {
  teacher: TeacherType;
};

export function TeacherCreatePageOverviewTable({
  teacher,
}: TeacherCreatePageOverviewTableProps) {
  return (
    <div>
      <div className="block md:hidden">
        <List>
          <ListItem divider>
            <ListItemText
              primary="Sichtbarkeit"
              secondary={
                teacher.isVisible ? (
                  <span>
                    Dein Profil ist sichtbar{" "}
                    <CheckCircle
                      className="mb-1"
                      fontSize="small"
                      color="success"
                    />
                  </span>
                ) : (
                  <span>
                    Dein Profil ist unsichtbar{" "}
                    <Warning
                      className="mb-1"
                      fontSize="small"
                      color="warning"
                    />
                  </span>
                )
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Zuletzt aktualisiert"
              secondary={getDateAsDDMMYYYYHHMMSS("de", teacher.updatedAt)}
            />
          </ListItem>
        </List>
      </div>
      <div className="hidden md:block">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sichtbarkeit</TableCell>
              <TableCell>Zuletzt aktualisiert</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                {teacher.isVisible ? (
                  <span>
                    Dein Profil ist sichtbar{" "}
                    <CheckCircle
                      className="mb-1"
                      fontSize="small"
                      color="success"
                    />
                  </span>
                ) : (
                  <span>
                    Dein Profil ist unsichtbar{" "}
                    <Warning
                      className="mb-1"
                      fontSize="small"
                      color="warning"
                    />
                  </span>
                )}
              </TableCell>
              <TableCell>
                {getDateAsDDMMYYYYHHMMSS("de", teacher.updatedAt)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
