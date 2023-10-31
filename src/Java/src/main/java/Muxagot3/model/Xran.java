package Muxagot3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Muxagot3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Xran
 */
@Entity(name = "IISMuxagot3Xran")
@Table(schema = "public", name = "Xran")
public class Xran {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "IDИдентификатор")
    private Integer idидентификатор;

    @Column(name = "Настройки")
    private String настройки;

    @Column(name = "Данные")
    private String данные;

    @Column(name = "МетеостанцияID")
    private Integer метеостанцияid;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "meteo")
    @Convert("meteo")
    @Column(name = "meteo", length = 16, unique = true, nullable = false)
    private UUID _meteoid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "meteo", insertable = false, updatable = false)
    private meteo meteo;


    public Xran() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getIDИдентификатор() {
      return idидентификатор;
    }

    public void setIDИдентификатор(Integer idидентификатор) {
      this.idидентификатор = idидентификатор;
    }

    public String getНастройки() {
      return настройки;
    }

    public void setНастройки(String настройки) {
      this.настройки = настройки;
    }

    public String getДанные() {
      return данные;
    }

    public void setДанные(String данные) {
      this.данные = данные;
    }

    public Integer getМетеостанцияID() {
      return метеостанцияid;
    }

    public void setМетеостанцияID(Integer метеостанцияid) {
      this.метеостанцияid = метеостанцияid;
    }


}