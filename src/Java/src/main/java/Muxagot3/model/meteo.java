package Muxagot3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Muxagot3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: meteo
 */
@Entity(name = "IISMuxagot3meteo")
@Table(schema = "public", name = "meteo")
public class meteo {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Широта")
    private Double широта;

    @Column(name = "Метостанция")
    private String метостанция;

    @Column(name = "Местоположение")
    private String местоположение;

    @Column(name = "Долгота")
    private Double долгота;

    @Column(name = "ТекущаяТемп")
    private Double текущаятемп;

    @Column(name = "Влажность")
    private Double влажность;

    @Column(name = "IDИдентификатор")
    private Integer idидентификатор;

    @Column(name = "Настройки")
    private String настройки;

    @Column(name = "Данные")
    private String данные;

    @Column(name = "МетеостанцияID")
    private Integer метеостанцияid;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "City")
    @Convert("City")
    @Column(name = "City", length = 16, unique = true, nullable = false)
    private UUID _cityid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "City", insertable = false, updatable = false)
    private City city;

    @OneToMany(mappedBy = "meteo", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Xran> xrans;


    public meteo() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getШирота() {
      return широта;
    }

    public void setШирота(Double широта) {
      this.широта = широта;
    }

    public String getМетостанция() {
      return метостанция;
    }

    public void setМетостанция(String метостанция) {
      this.метостанция = метостанция;
    }

    public String getМестоположение() {
      return местоположение;
    }

    public void setМестоположение(String местоположение) {
      this.местоположение = местоположение;
    }

    public Double getДолгота() {
      return долгота;
    }

    public void setДолгота(Double долгота) {
      this.долгота = долгота;
    }

    public Double getТекущаяТемп() {
      return текущаятемп;
    }

    public void setТекущаяТемп(Double текущаятемп) {
      this.текущаятемп = текущаятемп;
    }

    public Double getВлажность() {
      return влажность;
    }

    public void setВлажность(Double влажность) {
      this.влажность = влажность;
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