package pl.edu.pwr.student.satelliteserver.api.image;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;

@Getter
@Service
@AllArgsConstructor
@NoArgsConstructor
public class ImageDaysWrapper {

    private Date date;
    private byte[] img;
}
