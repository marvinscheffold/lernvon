import { getDateAsDDMMYYYYHHMMSS } from "@/app/_utils/getDateAsDDMMYYYYHHMMSS";
import { TeacherType } from "@/app/_utils/types/teacher";
import {
  Badge,
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

type TeacherOverviewTableProps = {
  teacher: TeacherType;
};

export function TeacherOverviewTable({ teacher }: TeacherOverviewTableProps) {
  return (
    <div>
      <div className="block md:hidden">
        <List>
          <ListItem divider>
            <ListItemText
              primary="Visibility"
              secondary={
                teacher.isVisible ? (
                  <Chip
                    color="success"
                    size="small"
                    label="Your profile is
                  visible"
                  />
                ) : (
                  <Chip
                    color="warning"
                    size="small"
                    label="Your profile is
                invisible"
                  />
                )
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Last updated"
              secondary={getDateAsDDMMYYYYHHMMSS("de", teacher.updatedAt)}
            />
          </ListItem>
        </List>
      </div>
      <div className="hidden md:block">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Visible</TableCell>
              <TableCell>Last updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                {teacher.isVisible ? (
                  <Chip
                    color="success"
                    size="small"
                    label="Your profile is
                visible"
                  />
                ) : (
                  <Chip
                    color="warning"
                    size="small"
                    label="Your profile is
                invisible"
                  />
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
